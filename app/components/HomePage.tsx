'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F9E4B7]">
      <main className="container mx-auto mt-8 px-4">
        <section className="relative h-[70vh] rounded-lg overflow-hidden">
          <Image
            src="/images/oaxaca-background.jpg"
            alt="Colorful Oaxacan doors"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Welcome to 20 de Noviembre</h1>
              <p className="text-xl text-white mb-8">Discover our luxurious collection inspired by Oaxacan culture</p>
              <Link href="#" className="bg-[#16A085] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#1ABC9C] transition duration-300">
                Shop Now
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-[#D35400] mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={`/images/product-${item}.jpg`}
                    alt={`Product ${item}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Luxury Item {item}</h3>
                  <p className="text-gray-600 mb-4">Experience the essence of Oaxaca with our handcrafted pieces.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#D35400] font-bold">$199.99</span>
                    <button className="bg-[#16A085] text-white px-4 py-2 rounded-full hover:bg-[#1ABC9C] transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}