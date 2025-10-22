import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Menu Translator - Understand Any Menu in Any Language',
  description: 'Instantly translate and understand restaurant menus with AI-powered visual translation and food explanations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}
