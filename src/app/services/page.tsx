import type { Metadata } from 'next'
import Link from 'next/link'
import { Paintbrush, Scale, CreditCard, Building2, BarChart3, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'EasyLivin Goa offers interior design, legal services, loan assistance, property management, valuation and NRI services.',
}

const SERVICES = [
  { icon: Paintbrush, title: 'Interior Design', desc: 'Transform your new property with curated interior design packages — from budget-friendly to premium luxury. Our network of trusted designers specialise in Goa\'s unique aesthetic.', href: '/services/interior' },
  { icon: Scale, title: 'Legal Services', desc: 'Hassle-free property registration, title verification, and legal documentation by certified experts. We ensure every transaction is legally sound before you commit.', href: '/services/legal' },
  { icon: CreditCard, title: 'Loan Assistance', desc: 'Get the best home loan offers with instant eligibility checks and zero-documentation paperwork. We work with leading banks and NBFCs to get you the right rate.', href: '/services/loans' },
  { icon: Building2, title: 'Property Management', desc: 'Let us manage your rental properties — from tenant screening to maintenance, rent collection and more. Ideal for NRI investors and second home owners.', href: '/services/management' },
  { icon: BarChart3, title: 'Valuation Services', desc: 'Get a professional market valuation of your Goa property from our experienced consultants before buying, selling, or leasing.', href: '/services/valuation' },
  { icon: Globe, title: 'NRI Services', desc: 'Dedicated assistance for Non-Resident Indians looking to invest in Goa. We handle everything remotely — from property search to registration — so you can invest with confidence from anywhere in the world.', href: '/services/nri' },
]

export default function ServicesPage() {
  return (
    <>
      <div className="relative pt-[88px] pb-10" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e2444 100%)' }}>
        <div className="relative max-w-[1200px] mx-auto px-6 pt-6">
          <div className="flex items-center gap-2 mb-3 text-[12px]">
            <Link href="/" className="text-white/40 hover:text-gold transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            <span className="text-gold">Services</span>
          </div>
          <h1 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold text-white mb-2">Our Services</h1>
          <p className="text-white/55 text-[14px] max-w-[480px]">We don&apos;t just help you find a property — we support you through every step of the journey.</p>
        </div>
      </div>

      <section className="bg-white py-14">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc, href }) => (
              <div key={title} className="group border border-slate-100 rounded-xl p-7 hover:shadow-xl hover:border-gold/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-semibold text-[15px] text-navy mb-3">{title}</h3>
                <p className="text-slate-400 text-[13px] leading-relaxed mb-5">{desc}</p>
                <Link href={href} className="text-gold text-[11px] font-bold tracking-wide uppercase hover:underline inline-flex items-center gap-1">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
