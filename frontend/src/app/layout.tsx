import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'URL 2 QR',
  description: 'Generate QR Codes for your URLs quickly, also has a API for developers to use.',
  keywords: ['URl','QR Codes', 'Serverless', 'NextJS'],
  author: 'Rishab Kumar',
  creator: 'Rishab Kumar',
  openGraph: {
    images: '/og-image.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Analytics /></body>
    </html>
  )
}
