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
  const setInitialTheme = `
    (function() {
      try {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark' || theme === 'light') {
          document.documentElement.setAttribute('data-theme', theme);
        }
      } catch (e) {}
    })();
  `

  return (
    <html lang="pt-BR">
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
