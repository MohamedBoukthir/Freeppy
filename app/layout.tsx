import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import './globals.css'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartProvider from '@/providers/CartProvider'

import { Toaster } from 'react-hot-toast'
import { getCurrentUser } from '@/actions/getCurrentUser'

const poppins  = Poppins({ subsets: ['latin'], weight:['400', '700'] })

export const metadata: Metadata = {
  title: 'Freeppy',
  description: 'Explore curated, sustainable fashion at Freeppy. Discover unique pre-loved pieces, blending timeless style with eco-conscious choices. Shop now for affordable, quality clothing.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

const currentUser = await getCurrentUser()
console.log('user <<<', currentUser)

  return (
    <html lang="en">
      <body className={`${poppins.className} text-slate-700`}>
        <Toaster 
          toastOptions={{
            style: {
              background: 'rgb(51 65 85)',
              color: '#fff'
            },
          }}
        />
        <CartProvider>
          <div className='flex flex-col min-h-screen'>
            <Navbar/>
            <main className='flex-grow'>{children}</main>
            <Footer/>
          </div>
        </CartProvider> 
      </body>
    </html>
  )
}
