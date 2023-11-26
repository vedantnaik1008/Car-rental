import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const popins = Poppins({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Car Rental',
  description: 'Goa car on rent. Rent any ride you want for minimum 2 days with very cheap price just for you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={popins.className}>{children}</body>
    </html>
  )
}


