import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'EasyLivin is Goa\'s trusted real estate consultancy founded by Urmilla Dias. Over 10 years serving buyers, sellers and renters across Goa.',
}

const STATS = [
  { num: '1333+', label: 'Properties listed' },
  { num: '10+', label: 'Years in Goa' },
  { num: '1000s', label: 'Families helped' },
  { num: '100%', label: 'Legal compliance' },
]

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <div className="relative pt-[88px] pb-10" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e2444 100%)' }}>
        <div className="relative max-w-[1200px] mx-auto px-6 pt-6">
          <div className="flex items-center gap-2 mb-3 text-[12px]">
            <Link href="/" className="text-white/40 hover:text-gold transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            <span className="text-gold">About Us</span>
          </div>
          <h1 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold text-white mb-2">About EasyLivin</h1>
          <p className="text-white/55 text-[14px]">Over a decade of trusted real estate consultancy across Goa.</p>
        </div>
      </div>

      <section className="bg-white py-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Left image + stats */}
            <div>
              <div className="rounded-2xl overflow-hidden h-[420px] relative">
                <Image
                  src="/images/urmila.png"
                  alt="Urmilla Dias – Founder, EasyLivin Goa"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Name badge */}
                <div className="absolute bottom-4 right-4 bg-navy-deep/80 backdrop-blur-sm px-4 py-2.5 rounded-lg">
                  <p className="text-white font-semibold text-[13px] leading-none mb-0.5">Urmilla Dias</p>
                  <p className="text-gold text-[11px] tracking-wide">Founder - EasyLivin Goa</p>
                </div>
              </div>
              {/* Stats */}
              <div className="bg-navy rounded-xl p-6 mt-5 grid grid-cols-2 gap-5">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-[1.8rem] font-bold text-gold leading-none">{s.num}</div>
                    <div className="text-white/50 text-[11px] mt-1 tracking-wide">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right content */}
            <div>
              <span className="section-label mb-3 block">Our Story</span>
              <h2 className="font-display text-[clamp(1.4rem,3vw,2rem)] font-semibold text-navy mb-6 leading-tight">
                Your Best Guide to All Properties in Goa
              </h2>
              <div className="space-y-4 text-slate-500 text-[14px] leading-relaxed">
                <p>
                  Welcome to EasyLivin. Your best guide to all the properties in Goa. Your one stop shop
                  for a piece of paradise you are looking out for. Be it an apartment, a beach house, a
                  Portuguese house, farm land, industrial plot or shed or just a plot to build your dream
                  house or township.
                </p>
                <p>
                  We also help you to find a customer for your precious properties with the right price tag
                  that will make you smile. We will be by your side from choosing your property, checking
                  out its credentials till registration of sale deed.
                </p>
                <p>
                  We have been serving the people of Goa for over 10 years and have helped thousands of
                  families to find the right home to make their own. As an experienced Real Estate
                  Consultant, we have the expertise to understand the value of a home or property and guide
                  you to take the right decision while buying or renting a property.
                </p>
                <p>
                  Whether you are selling the much loved family home or experiencing the excitement of buying
                  your very first home, the decisions you need to make and the challenges you will face
                  require considerable research, planning and guidance — and EasyLivin will be at your
                  beacon through it all.
                </p>
              </div>

              {/* Quote */}
              <div className="mt-8 bg-gold-pale border-l-4 border-gold rounded-r-xl px-6 py-5">
                <p className="font-display italic text-[1.1rem] text-navy leading-relaxed mb-3">
                  &ldquo;In Goa, the best deals aren&apos;t on billboards; they&apos;re found through
                  decades of local trust.&rdquo;
                </p>
                <p className="text-[12px] font-semibold text-slate-500 tracking-wide uppercase">
                  — Urmilla Dias, Founder
                </p>
              </div>

              <div className="mt-7">
                <p className="text-[13px] text-slate-400 mb-1">For a personal consultation:</p>
                <a href="mailto:urmilla@easylivingoa.com" className="text-gold font-semibold hover:underline text-[14px]">
                  urmilla@easylivingoa.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
