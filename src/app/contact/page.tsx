import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with EasyLivin Goa. Office at Campal Trade Centre, Panjim. Call +91 88888 06964 or email urmilla@easylivingoa.com',
}

export default function ContactPage() {
  return (
    <>
      <div className="relative pt-[88px] pb-10" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e2444 100%)' }}>
        <div className="relative max-w-[1200px] mx-auto px-6 pt-6">
          <div className="flex items-center gap-2 mb-3 text-[12px]">
            <Link href="/" className="text-white/40 hover:text-gold transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            <span className="text-gold">Contact Us</span>
          </div>
          <h1 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold text-white mb-2">Get in Touch</h1>
          <p className="text-white/55 text-[14px]">We are here to help. Urmilla will personally respond to your enquiry.</p>
        </div>
      </div>

      <section className="bg-slate-50 py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-7">

            {/* Info card */}
            <div className="lg:col-span-2 bg-navy rounded-2xl p-8">
              <h3 className="font-display text-[1.4rem] font-semibold text-white mb-7">
                EasyLivin Real Estate Consultants
              </h3>

              {[
                {
                  icon: MapPin,
                  label: 'Office Address',
                  content: 'A-T17, Campal Trade Centre, 3rd Floor,\nOpposite Kala Academy, Campal,\nPanjim Goa – 403001',
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  content: '+91 9823 202737\n+91 88888 06964',
                  isPhone: true,
                },
                {
                  icon: Mail,
                  label: 'Email',
                  content: 'urmilla@easylivingoa.com',
                  isEmail: true,
                },
                {
                  icon: Clock,
                  label: 'Working Hours',
                  content: 'Monday – Saturday\n8:30 am – 6:30 pm',
                },
              ].map(({ icon: Icon, label, content, isPhone, isEmail }) => (
                <div key={label} className="flex gap-4 mb-6 last:mb-0">
                  <div className="w-10 h-10 bg-gold/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-gold text-[11px] font-bold tracking-[0.12em] uppercase mb-1">{label}</p>
                    {isPhone ? (
                      <div>
                        {content.split('\n').map((line) => (
                          <a key={line} href={`tel:${line.replace(/\s/g,'')}`} className="text-white/60 hover:text-white text-[13px] block transition-colors">{line}</a>
                        ))}
                      </div>
                    ) : isEmail ? (
                      <a href={`mailto:${content}`} className="text-white/60 hover:text-white text-[13px] transition-colors">{content}</a>
                    ) : (
                      <p className="text-white/60 text-[13px] whitespace-pre-line leading-relaxed">{content}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-gold mb-2">Website</p>
                <a href="http://www.easylivingoa.com" className="text-white/45 text-[13px] hover:text-white transition-colors">www.easylivingoa.com</a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl p-8 border border-slate-100">
              <h3 className="font-display text-[1.4rem] font-semibold text-navy mb-6">Send Us an Enquiry</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Your Name *</label>
                    <input className="form-input" type="text" placeholder="Full name" />
                  </div>
                  <div>
                    <label className="form-label">Mobile *</label>
                    <input className="form-input" type="tel" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div>
                  <label className="form-label">Email</label>
                  <input className="form-input" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="form-label">I am looking to</label>
                  <select className="form-input appearance-none">
                    <option>Buy a property</option>
                    <option>Rent a property</option>
                    <option>Sell my property</option>
                    <option>Just enquiring</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-input resize-none"
                    rows={4}
                    placeholder="Tell us what you are looking for — location, budget, property type..."
                  />
                </div>
                <button className="btn-gold w-full justify-center py-3.5">
                  Send Enquiry
                </button>
                <p className="text-center text-[12px] text-slate-400">
                  We respect your privacy. Your details will only be used to respond to your enquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
