'use client'

const testimonials = [
  {
    name: 'Melissa Manwarren',
    badge: 'Local Guide • 69 reviews • 45 photos',
    timeAgo: 'a month ago',
    rating: { food: 5, service: 5, atmosphere: 4 },
    review:
      'Great price on chicken wings - DINE IN ONLY. All you can eat fish fry and yummy Key lime and chocolate silk pies 🥧. You have to try for yourself!!',
    recommended: ['Chicken Wings', 'Fish Fry', 'Key Lime Pie', 'Chocolate Silk Pie'],
  },
  {
    name: 'John Amato',
    badge: 'Local Guide • 20 reviews • 55 photos',
    timeAgo: '8 months ago',
    visitType: 'Dinner • $10–20',
    rating: { food: 4, service: 4, atmosphere: 4 },
    review:
      "Casual friendly place with unassuming atmosphere and super nice servers. Specializing in fried fish, but lots of other menu offerings. We had the fish, shrimp, crab cakes, clams and meatloaf. All was terrific. Good portions and fair prices. They have Karaoke nights on Wednesdays.",
    recommended: ['Fish Fry'],
  },
  {
    name: 'Eleanor Lopez',
    badge: 'Local Guide • 284 reviews • 2597 photos',
    timeAgo: '4 months ago',
    visitType: 'Delivery • Lunch • $10–20',
    rating: { food: 5, service: 5, atmosphere: 5 },
    review:
      "I was happy when my friend told me that she wanted to take me to lunch and I was to decide which restaurant we would be eating at. Hmm. I said let's go to Frank's Restaurant! I want some fish and chips! And I hear that today is all-you-can-eat Fish Friday! Yesss! The food was delicious and the service very good as well. I highly recommend Frank's Restaurant to anyone who wants good quality food at affordable prices!",
    recommended: ['Fish and Chips', 'All-You-Can-Eat Fish Friday'],
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-diner-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-diner-red text-white px-8 py-4 transform -rotate-1 shadow-xl border-4 border-diner-dark">
              <h2 className="text-4xl md:text-5xl font-display font-bold">★ CUSTOMER REVIEWS ★</h2>
              <p className="text-diner-yellow text-sm tracking-widest">WHAT OUR GUESTS SAY</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, idx) => {
              const avgRating = (testimonial.rating.food + testimonial.rating.service + testimonial.rating.atmosphere) / 3
              const rotations = ['rotate-1', '-rotate-1', 'rotate-2']
              const rotation = rotations[idx % 3]

              return (
                <div
                  key={idx}
                  className={`relative bg-white p-6 shadow-2xl border-4 border-diner-dark transform ${rotation} hover:rotate-0 hover:scale-105 transition-all duration-300`}
                >
                  <div className="border-b-2 border-dashed border-diner-dark pb-4 mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-lg text-diner-dark">{testimonial.name}</h3>
                        <p className="text-xs text-diner-dark/60 mt-1">{testimonial.badge}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl mb-1">
                          {'★'.repeat(Math.round(avgRating))}
                          {'☆'.repeat(5 - Math.round(avgRating))}
                        </div>
                        <p className="text-xs text-diner-dark/60">{testimonial.timeAgo}</p>
                      </div>
                    </div>
                    {testimonial.visitType && (
                      <p className="text-xs text-diner-dark/70 font-semibold">{testimonial.visitType}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-diner-dark/80 leading-relaxed italic">"{testimonial.review}"</p>
                  </div>

                  <div className="border-t-2 border-dashed border-diner-dark pt-4 mb-4">
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-diner-dark/70">Food:</span>
                        <span className="font-bold text-diner-red">{testimonial.rating.food}/5</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-diner-dark/70">Service:</span>
                        <span className="font-bold text-diner-blue">{testimonial.rating.service}/5</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-diner-dark/70">Atmosphere:</span>
                        <span className="font-bold text-diner-yellow">{testimonial.rating.atmosphere}/5</span>
                      </div>
                    </div>
                  </div>

                  {testimonial.recommended && testimonial.recommended.length > 0 && (
                    <div className="border-t-2 border-dashed border-diner-dark pt-4">
                      <p className="text-xs font-bold text-diner-dark mb-2">RECOMMENDED:</p>
                      <div className="flex flex-wrap gap-2">
                        {testimonial.recommended.map((dish, dishIdx) => (
                          <span
                            key={dishIdx}
                            className="text-xs bg-diner-yellow text-diner-dark px-2 py-1 font-semibold transform -rotate-1"
                          >
                            {dish}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="absolute -top-2 -right-2 bg-diner-red text-white text-xs px-2 py-1 font-bold transform rotate-12 shadow-lg border-2 border-white">
                    ⭐
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <div className="inline-block bg-diner-yellow px-8 py-4 transform rotate-1 shadow-xl border-4 border-diner-dark">
              <p className="font-bold text-diner-dark text-lg">Share Your Experience!</p>
              <p className="text-sm text-diner-dark/70 mt-1">Leave us a review on Google or Yelp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

