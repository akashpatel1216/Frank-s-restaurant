'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = ['home', 'menu']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Vintage Neon Sign Header - Fixed */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-diner-dark/95 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Neon Logo */}
            <a href="#home" className="relative group">
              <div className="text-4xl md:text-5xl font-display font-bold tracking-wider">
                <span className="text-diner-yellow neon-text animate-pulse">FRANK'S</span>
                <span className="block text-xl md:text-2xl text-diner-red uppercase tracking-[0.5em]" style={{ textShadow: '0 0 10px #E63946, 0 0 20px #E63946' }}></span>
              </div>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-diner-yellow to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>

            {/* Retro Toggle Menu Buttons */}
            <div className="flex gap-2">
              <a
                href="#menu"
                className={`px-4 py-2 border-2 transition-all ${
                  activeSection === 'menu'
                    ? 'bg-diner-yellow text-diner-dark border-diner-yellow'
                    : 'border-diner-yellow text-diner-yellow hover:bg-diner-yellow hover:text-diner-dark'
                }`}
              >
                MENU
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-32"></div>
    </>
  )
}

