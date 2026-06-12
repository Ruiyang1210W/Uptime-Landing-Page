import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Uptime! — AI-Powered Sitting Reminder for Chrome',
  description:
    "Stop sitting too long. Uptime! detects when you've been glued to your chair and rewards you with AI-generated fun facts, compliments, and mini challenges. Your adorable otter mascot is waiting.",
  keywords: ['sitting reminder', 'break reminder', 'chrome extension', 'health', 'productivity', 'AI'],
  icons: {
    icon: '/mint.png',
    apple: '/mint.png',
  },
  openGraph: {
    title: 'Uptime! — Stop Sitting. Start Living.',
    description: 'AI-powered Chrome extension that rewards you for taking movement breaks.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
