'use client'

import CalendlyInlineWidget from '@/components/calendly-inline-widget'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero with H1 */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact Dr. Janet Duffy: Let's Talk About Selling Your Home
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Your home didn't sell? Let's change that. Reach out today for a free consultation.
          </p>
        </div>
      </section>

      {/* Scheduling Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Get In Touch Today
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Book a time below or call directly. Dr. Janet Duffy responds quickly to help homeowners whose properties didn't sell successfully.
            </p>

            <CalendlyInlineWidget />
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Contact Information
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="text-blue-600 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+17025001955" className="text-blue-600 hover:text-blue-800">
                    (702) 500-1955
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-blue-600 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:HomeSales@CallDrDuffy.com" className="text-blue-600 hover:text-blue-800">
                    HomeSales@CallDrDuffy.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-blue-600 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Office</h3>
                  <p className="text-gray-600">Las Vegas, NV</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Prefer to Text?</h3>
              <p className="text-gray-700 mb-4">
                Send a quick text to (702) 500-1955 and we'll respond right away.
              </p>
              <a
                href="sms:+17025001955"
                className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Text Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

