'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Homepage() {
  const [address, setAddress] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          source: 'Rental sale consultation — homepage',
        }),
      })

      if (response.ok) {
        alert('Thank you! Dr. Jan will contact you soon.')
        setAddress('')
        setName('')
        setEmail('')
        setPhone('')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error. Please try again or call (702) 222-1964.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Selling a Las Vegas Rental Property with Tenants? Let&apos;s Plan It
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Landlord-focused listing strategy — leases, NRS 118A notice, and showings while tenants
            remain in place
          </p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-lg shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Rental Sale Consultation</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="home-address" className="sr-only">Rental property address</label>
                <input
                  id="home-address"
                  type="text"
                  placeholder="Rental property address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  aria-label="Rental property address"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="home-name" className="sr-only">Your Name</label>
                  <input
                    id="home-name"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
                    required
                    aria-label="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="home-email" className="sr-only">Email Address</label>
                  <input
                    id="home-email"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
                    required
                    aria-label="Email Address"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="home-phone" className="sr-only">Phone Number</label>
                <input
                  id="home-phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                  aria-label="Phone Number"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                {isSubmitting ? 'Submitting...' : 'Start the Conversation'}
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              By submitting, you agree to be contacted about your rental property sale
            </p>
          </form>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            What Makes a Tenant-Occupied Sale Different
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-8 rounded-lg border border-red-200">
              <div className="text-red-600 text-5xl mb-4">📋</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">NRS 118A Notice</h3>
              <p className="text-gray-700">
                Nevada law sets how and when you notify tenants about a sale. We align your timeline
                with proper notice before marketing begins.
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
              <div className="text-yellow-600 text-5xl mb-4">🔑</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Showings With Tenants In Place</h3>
              <p className="text-gray-700">
                Access rules, appointment blocks, and buyer expectations are planned up front so
                showings stay predictable for you and your renters.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
              <div className="text-blue-600 text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Investor-Ready Pricing</h3>
              <p className="text-gray-700">
                Rent roll, lease terms, and cap-rate buyers matter. We position your rental against
                recent investor sales — not just owner-occupant comps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Rental-Heavy Las Vegas ZIP Codes We Track
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Investor inventory clusters across central Las Vegas. We monitor rental turnover and
            sales activity in ZIP codes including 89103, 89119, 89169, and 89109 — verify current
            Census ACS rental share before you list.
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            <Link
              href="/zipcodes/89103"
              className="bg-white py-3 px-6 rounded-lg shadow-md font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
            >
              ZIP 89103 guide
            </Link>
            <span className="py-3 px-4 text-gray-600 text-sm md:text-base">
              Also tracking 89119, 89169, and 89109 rental inventory
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            Condos, Duplexes, and Single-Family Rentals
          </h2>
          <p className="text-lg text-gray-700 text-center mb-6">
            Whether you own a rented condo near the Strip corridor or a long-term lease on a
            single-family home in Henderson, the process starts with lease review and buyer
            targeting — not a generic MLS launch.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 max-w-2xl mx-auto">
            <li>Sell rental property with tenants in Nevada</li>
            <li>Coordinate buyer due diligence around existing leases</li>
            <li>Market to Las Vegas investor buyers and 1031 exchangers</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-12 rounded-lg shadow-xl">
            <p className="text-2xl italic text-gray-700 mb-6">
              &quot;I needed to sell a duplex with both units leased. Dr. Jan mapped the NRS notice
              timeline, kept showings organized, and we closed with the buyer assuming both
              leases.&quot;
            </p>
            <div className="flex items-center justify-center">
              <div className="text-left">
                <p className="font-bold text-gray-900">Las Vegas landlord</p>
                <p className="text-gray-600">Two-unit rental — ZIP 89103</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Talk Through Your Rental Sale</h2>
          <p className="text-xl mb-8">
            Free consultation. Clear next steps on notice, marketing, and timing.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="tel:+17022221964"
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Call Now: (702) 222-1964
            </a>
            <Link
              href="/contact"
              className="bg-blue-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-900 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
