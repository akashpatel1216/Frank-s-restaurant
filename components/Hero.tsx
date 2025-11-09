'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [timeOfDay, setTimeOfDay] = useState('')

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setTimeOfDay('Breakfast')
    else if (hour < 17) setTimeOfDay('Lunch')
    else setTimeOfDay('Dinner')
  }, [])

  return (
    <section id="home" className="relative min-h-screen bg-diner-cream overflow-hidden pt-0">
      {/* Checkered Floor Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'repeating-conic-gradient(#1D3557 0% 25%, transparent 0% 50%) 50% / 40px 40px'
      }}></div>

      {/* Main Content - Diner Booth Style */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Vintage Diner Sign Board */}
          <div className="bg-diner-dark border-8 border-diner-yellow p-8 md:p-12 mb-12 relative transform -rotate-1 shadow-2xl">
            <div className="absolute -top-4 -right-4 bg-diner-red text-white px-6 py-3 font-bold text-xl transform rotate-12 shadow-lg border-4 border-white">
              FAMILY OWNED
            </div>
            
            <div className="text-center">
              <div className="text-diner-yellow text-sm tracking-[0.3em] mb-2">LOCALLY LOVED</div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4" style={{
                textShadow: '3px 3px 0 #E63946, 6px 6px 0 #FFB703'
              }}>
                FRANK'S DINER
              </h1>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-1 w-20 bg-diner-yellow"></div>
                <span className="text-diner-cream text-xl">★ ★ ★</span>
                <div className="h-1 w-20 bg-diner-yellow"></div>
              </div>
              <p className="text-diner-cream text-2xl md:text-3xl font-display italic">
                "Where Strangers Become Friends Over Coffee"
              </p>
            </div>
          </div>

          {/* Daily Specials Board */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Special Card 1 */}
            <div className="bg-white p-6 transform rotate-1 shadow-xl border-4 border-diner-dark">
              <div className="border-4 border-dashed border-diner-red p-4">
                <div className="text-center">
                  <div className="text-5xl mb-3">🍳</div>
                  <div className="font-bold text-diner-dark text-sm mb-2">TODAY'S SPECIAL</div>
                  <h3 className="text-2xl font-display font-bold text-diner-red mb-2">
                    {timeOfDay} Combo
                  </h3>
                  <p className="text-diner-dark/70">The Classic American Way</p>
                  <div className="mt-4 bg-diner-yellow text-diner-dark font-bold py-2 px-4 inline-block transform -rotate-2">
                    $9.99
                  </div>
                </div>
              </div>
            </div>

            {/* Special Card 2 */}
            <div className="bg-white p-6 transform -rotate-1 shadow-xl border-4 border-diner-dark">
              <div className="border-4 border-dashed border-diner-blue p-4">
                <div className="text-center">
                  <div className="text-5xl mb-3">🍔</div>
                  <div className="font-bold text-diner-dark text-sm mb-2">CUSTOMER FAVORITE</div>
                  <h3 className="text-2xl font-display font-bold text-diner-blue mb-2">
                    Frank's Burger
                  </h3>
                  <p className="text-diner-dark/70">A Legend Since '52</p>
                  <div className="mt-4 bg-diner-red text-white font-bold py-2 px-4 inline-block transform rotate-2">
                    $11.99
                  </div>
                </div>
              </div>
            </div>

            {/* Special Card 3 */}
            <div className="bg-white p-6 transform rotate-2 shadow-xl border-4 border-diner-dark">
              <div className="border-4 border-dashed border-diner-yellow p-4">
                <div className="text-center">
                  <div className="text-5xl mb-3">🥧</div>
                  <div className="font-bold text-diner-dark text-sm mb-2">HOMEMADE DAILY</div>
                  <h3 className="text-2xl font-display font-bold text-diner-dark mb-2">
                    Pie of the Day
                  </h3>
                  <p className="text-diner-dark/70">Grandma's Recipe</p>
                  <div className="mt-4 bg-diner-blue text-white font-bold py-2 px-4 inline-block transform -rotate-3">
                    $6.99
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vintage Arrow */}
          <div className="text-center mt-12 animate-bounce">
            <div className="text-6xl text-diner-red">↓</div>
            <p className="text-diner-dark font-bold">SCROLL FOR MENU</p>
          </div>
        </div>
      </div>
    </section>
  )
}

