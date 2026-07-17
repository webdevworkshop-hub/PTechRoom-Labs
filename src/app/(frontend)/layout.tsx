import { Fraunces, Outfit } from 'next/font/google'
import React from 'react'

import { Navbar } from '@/components/Navbar'

import './styles.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  description:
    'Learn practical skills with PTechRoom Labs — courses, PDFs, and guided learning for modern builders.',
  title: 'PTechRoom Labs',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
