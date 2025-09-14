// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const metadata: Metadata = {
  title: 'Keystone Group Investment',
  description: 'Diversified investments in Ethiopia — transportation, finance, trade, media, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-black via-[#020617] to-[#00122b] text-white antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
