import Footer from '@/app/components/custom-ui/footer'
import Navbar from '@/app/components/custom-ui/navbar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import BarMarket from './components/custom-ui/bar-market'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />

        <div className='h-full flex flex-col justify-between'>
          <BarMarket />
          <Navbar />

          <div className='flex-1'>
            {children}
          </div>

          <Footer />
        </div>
      </body>
    </html>
  )
}
