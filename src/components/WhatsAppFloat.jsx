import React from 'react'
import { MessageCircle } from 'lucide-react'

const number = (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '')
const message = encodeURIComponent("Hi Swagarage! I'd like to discuss a gifting / merchandise requirement.")
const href = number ? `https://wa.me/${number}?text=${message}` : '#contact'

export default function WhatsAppFloat() {
  return (
 <a
  href={`https://wa.me/${number}`}
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with us on WhatsApp"
>
  <svg
    viewBox="0 0 32 32"
    aria-hidden="true"
    className="whatsapp-icon"
  >
    <path
      fill="currentColor"
      d="M19.11 17.39c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.33-.79-.7-1.33-1.56-1.49-1.83-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.47.07-.72.34-.25.27-.94.92-.94 2.24s.97 2.59 1.1 2.77c.14.18 1.91 2.91 4.63 4.08.65.28 1.15.45 1.54.57.65.21 1.24.18 1.7.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"
    />
    <path
      fill="currentColor"
      d="M16.02 3.2c-7.08 0-12.84 5.75-12.84 12.82 0 2.26.59 4.47 1.72 6.41L3.1 28.8l6.53-1.72a12.8 12.8 0 0 0 6.39 1.7h.01c7.07 0 12.82-5.76 12.82-12.83S23.1 3.2 16.02 3.2zm0 23.47h-.01a10.62 10.62 0 0 1-5.41-1.48l-.39-.23-3.87 1.02 1.03-3.77-.25-.39a10.63 10.63 0 1 1 8.9 4.85z"
    />
  </svg>
</a>
  )
}
