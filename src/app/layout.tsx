import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://licitacao-three.vercel.app'),
  title: 'ERP Locast',
  description: 'ERP Locast',
  openGraph: {
    title: 'ERP Locast',
    description: 'ERP Locast',
    url: 'https://licitacao-three.vercel.app',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1400,
        height: 440,
        alt: 'ERP Locast',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Navbar />
        <main className="flex justify-center px-4 min-h-screen">
          <section className="w-full max-w-[1500px] mt-20 mb-10">
            {children}
          </section>
        </main>
        <Footer />
      </body>
    </html>
  )
}
