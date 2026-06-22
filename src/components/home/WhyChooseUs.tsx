import Image from 'next/image'
import { ShieldCheck, Globe, Users } from 'lucide-react'

const REASONS = [
  {
    icon: ShieldCheck,
    title: 'Clean Titles Only',
    desc: 'We vet every document before it ever reaches our listings, ensuring 100% legal compliance and zero surprises.',
  },
  {
    icon: Globe,
    title: 'Off-Market Inventory',
    desc: 'Access Goa\'s most exclusive homes that are never publicly listed. Our network is our greatest asset.',
  },
  {
    icon: Users,
    title: 'End-to-End Support',
    desc: 'From property selection to registration and beyond, we stay with you even after the keys are handed over.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left: Founder image + quote */}
          <div>
            <div className="rounded-2xl overflow-hidden h-[420px] relative">
              <Image
                src="/images/urmila.png"
                alt="Urmilla Dias – Founder, EasyLivin Goa"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Quote sits below the photo, not overlaying the face */}
            <div className="bg-gold-pale border-l-4 border-gold rounded-r-xl px-6 py-4 mt-4">
              <p className="font-display italic text-[1.05rem] text-navy leading-snug mb-2">
                &ldquo;In Goa, the best deals aren&apos;t on billboards; they&apos;re found through
                decades of local trust.&rdquo;
              </p>
              <p className="text-gold text-[12px] font-semibold tracking-wide">
                — Urmilla Dias, Founder
              </p>
            </div>
          </div>

          {/* Right: Reasons */}
          <div>
            <span className="section-label mb-3 block">Expertise You Can Trust</span>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.1rem)] font-semibold text-navy mb-7 leading-tight">
              Why Choose Us in Goa?
            </h2>
            <div className="space-y-6">
              {REASONS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[14px] text-navy mb-1">{title}</h3>
                    <p className="text-slate-400 text-[13px] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
