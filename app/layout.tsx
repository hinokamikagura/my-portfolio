import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jonathan Lim — Senior Web3 Backend Developer',
  description: 'Senior Web3 Backend Developer with 8+ years of experience in Go, TypeScript, and Rust. Built 13+ production projects including DeFi platforms, NFT marketplaces, trading terminals, and blockchain infrastructure across Ethereum, Solana, Bitcoin, and multiple EVM chains.',
  keywords: ['Senior Web3 Developer', 'Backend Developer', 'Go', 'TypeScript', 'Rust', 'Solidity', 'Blockchain', 'Smart Contracts', 'DeFi', 'NFT', 'Trading Bots', 'MEV', 'Solana', 'Bitcoin', 'Ethereum', 'Blockchain APIs', 'Web3 Infrastructure'],
  authors: [{ name: 'Jonathan Lim' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Jonathan Lim — Senior Web3 Backend Developer',
    description: 'Senior Web3 Backend Developer with 8+ years of experience. Built 13+ production projects across DeFi, NFT, trading, and blockchain infrastructure.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jonathan Lim — Senior Web3 Backend Developer',
    description: 'Senior Web3 Backend Developer specializing in Go, TypeScript, and Rust. Built DeFi platforms, NFT marketplaces, and trading infrastructure.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sans`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

