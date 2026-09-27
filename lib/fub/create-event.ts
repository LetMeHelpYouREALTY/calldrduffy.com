export type FubPersonPayload = {
  firstName: string
  lastName: string
  emails: Array<{ value: string }>
  phones: Array<{ value: string }>
}

export type FubEventPayload = {
  source: string
  system: string
  type: string
  message: string
  person: FubPersonPayload
}

export function splitName(fullName: string): { firstName: string; lastName: string } {
  const trimmed = fullName.trim()
  if (!trimmed) {
    return { firstName: 'Unknown', lastName: 'Lead' }
  }
  const parts = trimmed.split(/\s+/)
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: '—' }
  }
  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(' '),
  }
}

export async function sendFollowUpBossEvent(payload: FubEventPayload): Promise<void> {
  const apiKey = process.env.FOLLOW_UP_BOSS_API_KEY
  if (!apiKey) {
    throw new Error('FOLLOW_UP_BOSS_API_KEY is not configured')
  }

  const auth = Buffer.from(`${apiKey}:`, 'utf8').toString('base64')

  const response = await fetch('https://api.followupboss.com/v1/events', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const body = await response.text().catch(() => '')
    console.error('Follow Up Boss event failed', {
      status: response.status,
      body: body.slice(0, 500),
    })
    throw new Error(`Follow Up Boss API error: ${response.status}`)
  }
}
