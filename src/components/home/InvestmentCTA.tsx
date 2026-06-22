import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

const STATS = [
  { label: 'Avg. Rental Yield', value: '8% – 12%' },
  { label: 'Price Growth (YoY)', value: '+18%' },
  { label: 'Demand for Villas', value: 'High ↑' },
  { label: 'NRI Investment Interest', value: 'Very High' },
]

const FEATURES = [
  'Premium villas in top Goa locations',
  'High rental yield & ROI potential',
  'Verified legal & title clear properties',
  'End-to-end assistance from experts',
]

export default function InvestmentCTA() {
  return (
    <section className="bg-white py-12 border-t border-slate-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left text */}
          <div>
            <span className="section-label mb-3 block">Goa Investment Opportunity</span>
            <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-semibold text-navy mb-4 leading-tight">
              Own a Luxury Property<br />in Goa
            </h2>
            <p className="text-slate-500 text-[14px] leading-relaxed mb-6 max-w-[440px]">
              Discover exclusive villas, beachfront homes, and high-return investment
              properties in Goa&apos;s most sought-after locations.
            </p>
            <ul className="space-y-2.5 mb-8">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-slate-600 text-[13px]">
                  <CheckCircle size={15} className="text-gold flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex gap-3 flex-wrap">
              <Link href="/buy" className="btn-gold">
                Explore Properties
              </Link>
              <Link href="/contact" className="btn-outline-navy">
                Speak with Urmilla
              </Link>
            </div>
          </div>

          {/* Right: market stats card on navy background for contrast */}
          <div className="bg-navy rounded-2xl p-7">
            <h3 className="font-display text-[1.15rem] font-semibold text-white mb-6">
              Goa Property Market Highlights
            </h3>
            <div className="divide-y divide-white/10">
              {STATS.map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between py-4">
                  <span className="text-white/55 text-[13px]">{label}</span>
                  <span className="text-gold font-semibold text-[14px]">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
