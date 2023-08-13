'use client'

import { Header } from '@/app/components/Header'
import { ApolloProvider } from '@apollo/client'
import { Inter } from 'next/font/google'

import { client } from '@/lib/apollo'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Epiffania Joias',
//   description:
//     'Joias em Prata 925 e Banhadas a Ouro 18k | Loja online para Brasília/DF e Entorno'
// }

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/src/app/favicon.ico" sizes="any" />
        <title>Epiffania Joias</title>
      </head>
      <body className={`${inter.className} h-screen`}>
        <Header />
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </body>
    </html>
  )
}
