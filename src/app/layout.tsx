import type { Metadata } from 'next'
import { Recursive } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'
import Providers from '@/components/Providers'
import { constructMetadata } from '@/lib/utils'

const resursive = Recursive({ subsets: ['latin'] })

export const metadata: Metadata = constructMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={resursive.className}>
        <Navbar />
        <main className="flex min-h-[calc(100vh-3.5rem-1px)] flex-col">
          <div className="flex flex-1 flex-col">
            <Providers>{children}</Providers>
          </div>
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  )
}
