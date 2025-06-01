import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

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
        {children}
      </body>
    </html>
  )
}
