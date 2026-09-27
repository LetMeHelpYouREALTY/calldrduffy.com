import { NextRequest, NextResponse } from 'next/server'
import {
  sendFollowUpBossEvent,
  splitName,
  type FubEventPayload,
} from '@/lib/fub/create-event'

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, '')
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
  }
  return phone.trim()
}

function inquiryType(source: string | undefined, message?: string): string {
  const haystack = `${source ?? ''} ${message ?? ''}`.toLowerCase()
  if (
    haystack.includes('seller') ||
    haystack.includes('rental') ||
    haystack.includes('valuation') ||
    haystack.includes('consultation')
  ) {
    return 'Seller Inquiry'
  }
  return 'General Inquiry'
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const honeypot = typeof body.website === 'string' ? body.website.trim() : ''
    if (honeypot) {
      return NextResponse.json({ success: true, message: 'Thank you.' }, { status: 200 })
    }

    const name = typeof body.name === 'string' ? body.name.trim() : ''
    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const phone = typeof body.phone === 'string' ? body.phone.trim() : ''
    const address = typeof body.address === 'string' ? body.address.trim() : ''
    const message = typeof body.message === 'string' ? body.message.trim() : ''
    const source = typeof body.source === 'string' ? body.source.trim() : 'calldrduffy.com'

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 },
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'A valid email is required' }, { status: 400 })
    }

    const phoneDigits = phone.replace(/\D/g, '')
    if (phoneDigits.length < 10) {
      return NextResponse.json({ error: 'A valid phone number is required' }, { status: 400 })
    }

    const { firstName, lastName } = splitName(name)
    const lines = [
      source ? `Source: ${source}` : null,
      address ? `Property: ${address}` : null,
      message ? `Message: ${message}` : null,
    ].filter(Boolean)

    const payload: FubEventPayload = {
      source: 'calldrduffy.com',
      system: 'DrJanDuffyWebsite',
      type: inquiryType(source, message),
      message: lines.length > 0 ? lines.join('\n') : 'Website inquiry from calldrduffy.com',
      person: {
        firstName,
        lastName,
        emails: [{ value: email }],
        phones: [{ value: normalizePhone(phone) }],
      },
    }

    try {
      await sendFollowUpBossEvent(payload)
    } catch (error) {
      console.error('Lead capture FUB error:', error)
      return NextResponse.json(
        { error: 'Unable to submit your request right now. Please call (702) 222-1964.' },
        { status: 502 },
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Dr. Jan will contact you soon.',
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('Lead capture error:', error)
    return NextResponse.json(
      { error: 'Failed to process request. Please try again.' },
      { status: 500 },
    )
  }
}
