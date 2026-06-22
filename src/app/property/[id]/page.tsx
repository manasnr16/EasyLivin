'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, BedDouble, Bath, Maximize2, CheckCircle, Phone, Mail } from 'lucide-react'
import { PROPERTIES } from '@/lib/data'
import EnquiryModal from '@/components/ui/EnquiryModal'

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const property = PROPERTIES.find((p) => p.id === Number(params.id))

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-display text-2xl font-semibold text-navy mb-3">Property Not Found</h1>
          <Link href="/buy" className="btn-gold">Browse Properties</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-navy-deep pt-[88px] pb-5">
        <div className="max-w-[1200px] mx-auto px-6 pt-3">
          <div className="flex items-center gap-2 text-[12px]">
            <Link href="/" className="text-white/40 hover:text-gold transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            <Link href="/buy" className="text-white/40 hover:text-gold transition-colors">Buy</Link>
            <span className="text-white/20">/</span>
            <span className="text-gold line-clamp-1">{property.title}</span>
          </div>
        </div>
      </div>

      <section className="bg-white py-8">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Hero image */}
              <div className="relative h-[380px] rounded-2xl overflow-hidden mb-6">
                <Image src={property.img} alt={property.title} fill className="object-cover" priority />
                {property.badge && (
                  <span className="absolute top-4 left-4 bg-gold text-navy-deep text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-sm">
                    {property.badge}
                  </span>
                )}
              </div>

              {/* Title + price */}
              <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                <div>
                  <h1 className="font-display text-[1.6rem] font-semibold text-navy leading-tight mb-1">{property.title}</h1>
                  <div className="flex items-center gap-1.5 text-slate-400 text-[13px]">
                    <MapPin size={13} /> {property.location}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display text-[1.8rem] font-bold text-navy">{property.price}</div>
                  {property.priceNote && <span className="text-slate-400 text-[13px]">{property.priceNote}</span>}
                </div>
              </div>

              {/* Specs bar */}
              <div className="flex gap-6 flex-wrap bg-slate-50 rounded-xl px-6 py-4 mb-6 border border-slate-100">
                {property.beds !== null && (
                  <div className="flex items-center gap-2 text-[13px] text-slate-600">
                    <BedDouble size={16} className="text-gold" /> {property.beds} Bedrooms
                  </div>
                )}
                {property.baths !== null && (
                  <div className="flex items-center gap-2 text-[13px] text-slate-600">
                    <Bath size={16} className="text-gold" /> {property.baths} Bathrooms
                  </div>
                )}
                <div className="flex items-center gap-2 text-[13px] text-slate-600">
                  <Maximize2 size={15} className="text-gold" /> {property.area}
                </div>
                <div className="flex items-center gap-2 text-[13px] text-slate-600">
                  <span className="w-3 h-3 rounded-full bg-gold/80" /> {property.type}
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="font-semibold text-[15px] text-navy mb-3">About this property</h2>
                <p className="text-slate-500 text-[13.5px] leading-relaxed">
                  This is a premium {property.type.toLowerCase()} located in {property.location}. Listed
                  by EasyLivin Goa, Goa&apos;s most trusted real estate platform with over 10 years of
                  experience helping buyers find their perfect property. For more details and to arrange a
                  viewing, please get in touch with us.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Enquiry card */}
              <div className="bg-navy rounded-2xl p-6 sticky top-4">
                <h3 className="font-display text-[1.1rem] font-semibold text-white mb-1">Enquire About This Property</h3>
                <p className="text-white/50 text-[12px] mb-5">Urmilla will respond within 24 hours</p>
                <div className="space-y-3">
                  <input className="w-full px-4 py-2.5 bg-white/10 border border-white/15 rounded text-white placeholder:text-white/40 text-[13px] outline-none focus:border-gold transition-colors" type="text" placeholder="Your name" />
                  <input className="w-full px-4 py-2.5 bg-white/10 border border-white/15 rounded text-white placeholder:text-white/40 text-[13px] outline-none focus:border-gold transition-colors" type="tel" placeholder="Phone number" />
                  <textarea className="w-full px-4 py-2.5 bg-white/10 border border-white/15 rounded text-white placeholder:text-white/40 text-[13px] outline-none focus:border-gold transition-colors resize-none" rows={3} placeholder="Message..." defaultValue={`I am interested in: ${property.title}`} />
                  <button onClick={() => setEnquiryOpen(true)} className="btn-gold w-full justify-center py-3">
                    Send Enquiry
                  </button>
                </div>
                <div className="mt-5 pt-5 border-t border-white/10 space-y-2">
                  <a href="tel:+918888806964" className="flex items-center gap-2.5 text-white/60 hover:text-white text-[13px] transition-colors">
                    <Phone size={13} className="text-gold" /> +91 88888 06964
                  </a>
                  <a href="mailto:urmilla@easylivingoa.com" className="flex items-center gap-2.5 text-white/60 hover:text-white text-[13px] transition-colors">
                    <Mail size={13} className="text-gold" /> urmilla@easylivingoa.com
                  </a>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-gold-pale rounded-xl p-4 border border-gold/20">
                <p className="text-[12px] text-slate-600 leading-relaxed">
                  <strong className="text-navy">EasyLivin Goa</strong> — Over 10 years of trusted real estate
                  consultancy in Goa. 2% brokerage on purchase, 1 month rent on rentals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} propertyTitle={property.title} />
    </>
  )
}
