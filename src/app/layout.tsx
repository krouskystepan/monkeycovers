import type { Metadata } from 'next'
import { Recursive } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'
import { constructMetadata } from '@/lib/utils'
import QueryProvider from '@/components/providers/QueryClient'
import ThemeProvider from '@/components/providers/Theme'

const resursive = Recursive({ subsets: ['latin'] })

export const metadata: Metadata = constructMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={resursive.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex min-h-[calc(100vh-3.5rem-1px)] flex-col">
            <div className="flex flex-1 flex-col">
              <QueryProvider>{children}</QueryProvider>
            </div>
            <Footer />
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
