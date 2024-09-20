"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingBag, Search, Menu, X } from 'lucide-react'

export function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#D35400] text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">20 de Noviembre</Link>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-[#E67E22] rounded-full transition duration-300">
            <Search className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-[#E67E22] rounded-full transition duration-300">
            <ShoppingBag className="w-6 h-6" />
          </button>
          <button 
            className="p-2 hover:bg-[#E67E22] rounded-full transition duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#D35400] p-4 shadow-lg">
          <nav>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="block py-2 px-4 hover:bg-[#E67E22] rounded transition duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="block py-2 px-4 hover:bg-[#E67E22] rounded transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block py-2 px-4 hover:bg-[#E67E22] rounded transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}