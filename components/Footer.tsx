export default function Footer() {
  return (
    <footer className="bg-diner-dark text-diner-cream relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="h-2 bg-gradient-to-r from-diner-yellow via-diner-red to-diner-yellow"></div>
      
      <div className="container mx-auto px-4 py-12">
        
        {/* Main Footer Content */}
        <div className="text-center mb-8">
          {/* Neon Sign Style Logo */}
          <div className="mb-6">
            <div className="text-5xl font-display font-bold inline-block">
              <span className="text-diner-yellow neon-text">FRANK'S</span>
              <span className="block text-3xl text-diner-red mt-2" style={{textShadow: '0 0 10px #E63946'}}>
                ◆ DINER ◆
              </span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xl font-display italic text-diner-cream/80 mb-8">
            "Where every meal feels like coming home"
          </p>

          {/* Quick Info */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8 text-left">
            <div>
              <div className="text-sm font-bold text-diner-yellow uppercase">Service options</div>
              <p className="text-sm text-diner-cream/70 mt-2">
                All you can eat • Happy hour food • Great cocktails
              </p>
            </div>
            <div>
              <div className="text-sm font-bold text-diner-yellow uppercase">Address</div>
              <p className="text-sm text-diner-cream/70 mt-2">
                15925 US-19, Hudson, FL 34667
              </p>
            </div>
            <div>
              <div className="text-sm font-bold text-diner-yellow uppercase">Get there</div>
              <p className="text-sm text-diner-cream/70 mt-2">46 min</p>
            </div>
            <div>
              <div className="text-sm font-bold text-diner-yellow uppercase">Phone</div>
              <p className="text-sm text-diner-cream/70 mt-2">(727) 268-9259</p>
            </div>
            <div className="lg:col-span-3">
              <div className="text-sm font-bold text-diner-yellow uppercase">Hours</div>
              <ul className="mt-2 space-y-1 text-sm text-diner-cream/70">
                <li className="flex justify-between border-b border-diner-cream/10 pb-1">
                  <span>Sunday</span>
                  <span>11 AM–8 PM</span>
                </li>
                <li className="flex justify-between border-b border-diner-cream/10 pb-1">
                  <span>Monday</span>
                  <span>11 AM–8 PM</span>
                </li>
                <li className="flex justify-between border-b border-diner-cream/10 pb-1">
                  <span className="flex-1">
                    Tuesday <span className="text-diner-cream/50">(Veterans Day)</span>
                  </span>
                  <span>11 AM–8 PM</span>
                </li>
                <li className="flex justify-between border-b border-diner-cream/10 pb-1">
                  <span>Wednesday</span>
                  <span>11 AM–8 PM</span>
                </li>
                <li className="flex justify-between border-b border-diner-cream/10 pb-1">
                  <span>Thursday</span>
                  <span>11 AM–8 PM</span>
                </li>
                <li className="flex justify-between border-b border-diner-cream/10 pb-1">
                  <span>Friday</span>
                  <span>11 AM–9 PM</span>
                </li>
                <li className="flex justify-between border-b border-diner-cream/10 pb-1">
                  <span>Saturday</span>
                  <span>11 AM–9 PM</span>
                </li>
              </ul>
              <p className="text-xs text-diner-cream/50 mt-3 italic">Hours might differ • Suggest new hours</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="#home" className="px-4 py-2 border-2 border-diner-yellow text-diner-yellow hover:bg-diner-yellow hover:text-diner-dark transition-all">
              HOME
            </a>
            <a href="#menu" className="px-4 py-2 border-2 border-diner-yellow text-diner-yellow hover:bg-diner-yellow hover:text-diner-dark transition-all">
              MENU
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-4xl hover:scale-125 transition-transform">📘</a>
            <a href="#" className="text-4xl hover:scale-125 transition-transform">📷</a>
            <a href="#" className="text-4xl hover:scale-125 transition-transform">🐦</a>
            <a href="#" className="text-4xl hover:scale-125 transition-transform">🎵</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-diner-cream/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-diner-cream/60">
            <div>
              &copy; 2024 Frank's Diner. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              Made with <span className="text-diner-red text-xl animate-pulse">❤️</span> and a lot of butter
            </div>
            <div>Proudly serving our community for generations.</div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-diner-yellow/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-diner-red/5 rounded-full blur-3xl"></div>
    </footer>
  )
}

