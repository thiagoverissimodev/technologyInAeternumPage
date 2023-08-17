import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
let title = "Conquiste a Web com Páginas que convertem"
let description = 'Design inovador, funcionalidades impactantes, conversões elevadas.'
export const metadata: Metadata = { 
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#17181C] text-white">{children}</body>
    </html>
  )
}
