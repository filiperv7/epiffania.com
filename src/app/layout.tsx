import { Header } from '@/app/components/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './components/Providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Epiffania Joias',
  description: 'Joias em Prata 925 e Banhadas a Ouro 18k'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head></head>
      <body className={`${inter.className} h-screen`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
