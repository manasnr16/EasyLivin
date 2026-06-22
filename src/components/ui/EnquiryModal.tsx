'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'

interface EnquiryModalProps {
  open: boolean
  onClose: () => void
  propertyTitle?: string
}

export default function EnquiryModal({ open, onClose, propertyTitle }: EnquiryModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[2000] bg-navy-deep/75 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl w-full max-w-md p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
        >
          <X size={15} />
        </button>

        <h3 className="font-display text-[1.5rem] font-semibold text-navy mb-1">Enquire Now</h3>
        <p className="text-slate-400 text-[13px] mb-6">
          {propertyTitle
            ? `Enquiring about: ${propertyTitle}`
            : "Send us your details and Urmilla will call you back within 24 hours."}
        </p>

        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="form-label">Name *</label>
              <input className="form-input" type="text" placeholder="Your name" />
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
            <label className="form-label">Message</label>
            <textarea
              className="form-input resize-none"
              rows={3}
              placeholder="Tell us what you are looking for..."
            />
          </div>
          <button
            onClick={onClose}
            className="btn-gold w-full justify-center py-3.5 text-[13px]"
          >
            Send Enquiry
          </button>
          <p className="text-center text-[11px] text-slate-400">
            We&apos;ll respond within 24 hours ·{' '}
            <a href="tel:+918888806964" className="text-gold hover:underline">
              +91 88888 06964
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
