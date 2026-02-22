import React from "react"
import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-sans'
})
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'DataFlow | Real-Time Data Infrastructure for Modern Teams',
  description: 'Process 2.4M+ events per second with 99.99% uptime. DataFlow is the unified platform for building, deploying, and scaling real-time data pipelines. Trusted by engineering teams at fast-growing companies worldwide.',
  generator: 'v0.app',
  keywords: ['data infrastructure', 'real-time analytics', 'data pipelines', 'event streaming', 'data engineering'],
  openGraph: {
    title: 'DataFlow | Real-Time Data Infrastructure',
    description: 'Process millions of events per second. Build data pipelines in minutes, not months.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataFlow | Real-Time Data Infrastructure',
    description: 'Process millions of events per second. Build data pipelines in minutes, not months.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
