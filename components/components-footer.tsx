'use client'

import Link from 'next/link'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export function FooterComponent() {
  return (
    <footer className="bg-[#D35400] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">20 de Noviembre</h2>
            <p className="text-sm">Luxury inspired by Oaxacan culture</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="hover:text-[#F9E4B7] transition duration-300">Products</Link></li>
              <li><Link href="/about" className="hover:text-[#F9E4B7] transition duration-300">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#F9E4B7] transition duration-300">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-[#F9E4B7] transition duration-300">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F9E4B7] transition duration-300">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F9E4B7] transition duration-300">
                <TikTokIcon />
                <span className="sr-only">TikTok</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F9E4B7] transition duration-300">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F9E4B7] transition duration-300">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">X (Twitter)</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#E67E22] text-center text-sm">
          <p>&copy; {new Date().getFullYear()} 20 de Noviembre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}