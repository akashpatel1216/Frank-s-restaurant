import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import DailySpecials from '@/components/DailySpecials'
import MenuPreview from '@/components/MenuPreview'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <DailySpecials />
      <MenuPreview />
      <Testimonials />
      <Footer />
    </main>
  )
}

