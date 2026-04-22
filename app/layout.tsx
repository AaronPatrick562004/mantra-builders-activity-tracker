import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { LanguageProvider } from './context/LanguageContext'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: 'Mantra Builders Activity Tracker | Sustainable Living - Mantra Builders',
  description: 'Track and monitor Eco-Club activities across Mantra Builders residential communities. A digital platform for environmental awareness and sustainable lifestyle practices.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#2e7d32',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}