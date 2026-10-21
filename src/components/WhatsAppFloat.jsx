import React from 'react'
import { MessageCircle } from 'lucide-react'

const number = (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '')
const message = encodeURIComponent("Hi Swagarage! I'd like to discuss a gifting / merchandise requirement.")
const href = number ? `https://wa.me/${number}?text=${message}` : '#contact'

export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={href}
      target={number ? '_blank' : undefined}
      rel={number ? 'noreferrer' : undefined}
      aria-label="Chat with Swagarage on WhatsApp"
      title={number ? 'Chat with us on WhatsApp' : 'Start your Swagarage enquiry'}
    >
      <span className="whatsapp-ping" />
      <MessageCircle size={24} fill="currentColor" />
      <span className="whatsapp-label">Chat with us</span>
    </a>
  )
}
