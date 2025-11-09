import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Frank's Restaurant & Bar - Classic American Comfort Food",
  description:
    'Experience the golden age of American dining and bar culture with a modern twist. Enjoy hearty breakfasts, legendary burgers, and handcrafted cocktails all day.',
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

