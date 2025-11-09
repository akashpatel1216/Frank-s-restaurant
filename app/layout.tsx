import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Frank's Diner - Classic American Comfort Food",
  description: 'Experience the golden age of American dining with a modern twist. Enjoy hearty breakfasts, legendary burgers, and good times all day.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-body bg-diner-cream">{children}</body>
    </html>
  )
}

