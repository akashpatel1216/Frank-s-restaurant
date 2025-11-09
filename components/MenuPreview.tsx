'use client'

import { useState } from 'react'

type MenuItem = {
  name: string
  desc: string
  price: number
  hot?: boolean
}

type MenuSection = {
  title: string
  subtitle?: string
  items: MenuItem[]
}

const menuSections = {
  earlybird: {
    title: "EARLY BIRD",
    subtitle: "Includes Soup or Salad & 1 Side",
    items: [
      { name: "Spaghetti & Meatball", desc: "(No Side)", price: 11.99 },
      { name: "Chicken Breast", desc: "Fried, Grill or Blacken", price: 11.99 },
      { name: "Ham Steak", desc: "", price: 11.99 },
      { name: "Krab Kake", desc: "", price: 11.99 },
      { name: "Fish", desc: "Fried, Grill or Blacken", price: 11.99 },
      { name: "Liver & Onion", desc: "", price: 11.99 },
      { name: "Kielbasa & Kraut", desc: "", price: 11.99 },
      { name: "Pork Chop", desc: "Fried or Grilled", price: 11.99 },
      { name: "Shrimp", desc: "Fried, Grill or Black", price: 11.99 },
    ]
  },
  appetizers: {
    title: "APPETIZERS",
    items: [
      { name: "Fried Cauliflower", desc: "", price: 7.49 },
      { name: "Okra", desc: "", price: 7.49 },
      { name: "Hush Puppies", desc: "", price: 7.49 },
      { name: "Jalapeno Poppers", desc: "", price: 7.49 },
      { name: "Potato Skins", desc: "", price: 8.99 },
      { name: "Cheese Sticks", desc: "", price: 8.99 },
      { name: "Bacon & Cheese Fries", desc: "", price: 8.99 },
      { name: "Onion Rings", desc: "", price: 8.99 },
      { name: "Boneless Wings", desc: "", price: 9.99 },
      { name: "Chicken or Shrimp Quesadilla", desc: "Peppers, Onions & Cheese", price: 9.99 },
      { name: "Steak Quesadilla", desc: "Peppers, Onions & Cheese", price: 10.99 },
      { name: "Franks Extreme Loaded Nachos", desc: "Pork/Taco Beef/Cheese/Tomato/Black Olive/Jalapeno/BBQ Sauce", price: 13.49 },
      { name: "Buffalo Shrimp", desc: "", price: 10.99 },
      { name: "Basket", desc: "Fried Shrimp/5 Boneless Wings/Clam Strips/Chicken Fingers, Served with Fries", price: 11.99 },
      { name: "Spring Roll", desc: "(5 pieces)", price: 6.99 },
    ]
  },
  lunch: {
    title: "LUNCH MENU",
    subtitle: "All Sandwiches include Coleslaw & Pickle",
    items: [
      { name: "Tuna, Egg or Chicken Salad", desc: "", price: 7.49 },
      { name: "Grill Cheese", desc: "", price: 7.49 },
      { name: "Grill Cheese with Ham & Bacon", desc: "", price: 8.99 },
      { name: "Hot Dog", desc: "", price: 5.49 },
      { name: "Kielbasa", desc: "", price: 7.29 },
      { name: "Franks Famous Helicopter", desc: "Fried Bologna, Grill Onions, Cheese, Lettuce & Tomatoes", price: 9.99, hot: true },
      { name: "Turkey Melt", desc: "On Grill Rye, Tomato, Bacon, Swiss & American", price: 8.99 },
      { name: "Tuna Melt", desc: "Grill Rye, Tomato, American & Swiss", price: 8.99 },
      { name: "Ham, Turkey or Roast Beef", desc: "Cheese, Mayo, Lettuce & Tomatoes", price: 9.99 },
      { name: "Chicken Sandwich", desc: "Grill, Black, Fried, lettuce, Tomato", price: 10.99 },
      { name: "Buffalo Chicken Sandwich", desc: "lettuce & tomato", price: 10.99 },
      { name: "Ruben", desc: "Side of 1000 Island", price: 11.99 },
      { name: "Fish Ruben", desc: "Side of 1000 Island", price: 11.99 },
      { name: "Open Face Sandwich", desc: "With Mash or Fries Roast Beef, Turkey or Meat loaf", price: 12.99 },
      { name: "B.L.T Sandwich", desc: "", price: 7.49 },
    ]
  },
  clubs: {
    title: "CLUBS",
    items: [
      { name: "Ham & Swiss, Turkey & Bacon", desc: "", price: 11.49 },
      { name: "Roast Beef & Swiss B.L.T.", desc: "", price: 11.49 },
    ]
  },
  wraps: {
    title: "WRAPS",
    subtitle: "Lettuce, Tomato & Dressing",
    items: [
      { name: "Chicken Caesar", desc: "", price: 10.49 },
      { name: "Veggie", desc: "", price: 10.49 },
      { name: "Chicken Ranch", desc: "", price: 10.49 },
      { name: "Buff Chicken", desc: "", price: 10.49 },
    ]
  },
  hoagies: {
    title: "HOAGIES",
    items: [
      { name: "French Dip", desc: "", price: 12.49 },
      { name: "Steak", desc: "", price: 12.49 },
      { name: "Chicken", desc: "", price: 12.49 },
      { name: "Italian Sausage", desc: "", price: 12.49 },
      { name: "Meatball Parm", desc: "", price: 12.49 },
      { name: "Chicken Parm", desc: "", price: 12.49 },
      { name: "Franks Cuban", desc: "Mayo, Mustard, Pickle, Ham, Pork, Swiss Pressed", price: 12.49 },
    ]
  },
  burgers: {
    title: "BURGERS",
    subtitle: "1/2 lb Burger never frozen Lettuce, Tomato",
    items: [
      { name: "Hamburger", desc: "", price: 8.99 },
      { name: "Cheeseburger", desc: "", price: 9.99 },
      { name: "Bacon Cheese", desc: "", price: 9.99 },
      { name: "Mushroom & Swiss", desc: "", price: 9.49 },
      { name: "Blue Cheese", desc: "", price: 8.99 },
      { name: "Cowboy BBQ Onion Ring Cheese", desc: "", price: 9.49 },
      { name: "Patty Melt", desc: "", price: 9.99 },
    ]
  },
  wings: {
    title: "CHICKEN WINGS",
    items: [
      { name: "Mild", desc: "", price: 9.99 },
      { name: "Medium", desc: "", price: 9.99 },
      { name: "Hot", desc: "", price: 9.99 },
      { name: "BBQ", desc: "", price: 9.99 },
      { name: "Garlic Parm", desc: "", price: 9.99 },
      { name: "Teriyaki", desc: "", price: 9.99 },
      { name: "Sweet Chili", desc: "", price: 9.99 },
      { name: "Blackened Old Bay", desc: "", price: 9.99 },
      { name: "Lemon Pepper", desc: "", price: 9.99 },
    ]
  },
  dinner: {
    title: "DINNER ENTREES",
    items: [
      { name: "Ham Steak With Pineapple", desc: "Includes Soup or Salad & 2 Sides", price: 12.99 },
      { name: "Kielbasa Over Kraut", desc: "Includes Soup or Salad & 2 Sides", price: 12.99 },
      { name: "Country Fried Steak", desc: "With Mushroom & Gravy, Includes Soup or Salad & 2 Sides", price: 12.99 },
      { name: "Pork Chops", desc: "Fried or Grilled, Includes Soup or Salad & 2 Sides", price: 13.99 },
      { name: "Pork Tenderloin", desc: "Includes Soup or Salad & 2 Sides", price: 13.99 },
      { name: "Pot Roast", desc: "Includes Soup or Salad & 2 Sides", price: 13.99 },
      { name: "Meat Loaf", desc: "(Homemade) Includes Soup or Salad & 2 Sides", price: 13.99 },
      { name: "Liver & Onions", desc: "Includes Soup or Salad & 2 Sides", price: 13.99 },
      { name: "Chicken Fingers", desc: "Includes Soup or Salad & 2 Sides", price: 13.99 },
      { name: "Chicken Breasts", desc: "Grilled or Fried, Includes Soup or Salad & 2 Sides", price: 13.99 },
      { name: "Lemon Chicken", desc: "Sauté in Lemon sauce, Includes Soup or Salad & 2 Sides", price: 13.99 },
      { name: "Chop Steak", desc: "Mushroom & Onion, Includes Soup or Salad & 2 Sides", price: 13.99 },
      { name: "Shrimp (6)", desc: "Grilled, Fried or Black, Includes Soup or Salad & 2 Sides", price: 13.99 },
      { name: "Coconut Shrimp (6)", desc: "Includes Soup or Salad & 2 Sides", price: 13.99 },
      { name: "Krab Kakes", desc: "Includes Soup or Salad & 2 Sides", price: 13.99 },
      { name: "Chicken Cordon Blue", desc: "Includes Soup or Salad & 2 Sides", price: 14.99 },
      { name: "Chicken Fiesta", desc: "Includes Soup or Salad & 2 Sides", price: 14.99 },
      { name: "Franks Famous Fish", desc: "Fried, Black or Grilled, Includes Soup or Salad & 2 Sides", price: 14.99, hot: true },
      { name: "Ultimate Shrimp Scampi", desc: "Fried/Grilled/Black, Includes Soup or Salad & 2 Sides", price: 16.99 },
      { name: "Fried Seafood Platter", desc: "Fish, Shrimp, Clams & Crab Cake, Includes Soup or Salad & 2 Sides", price: 19.99 },
    ]
  },
  pasta: {
    title: "PASTA",
    subtitle: "Includes Soup or Salad",
    items: [
      { name: "Spaghetti & Meatballs", desc: "", price: 12.99 },
      { name: "Spaghetti & Broccoli", desc: "With Lemon, Garlic, Oil", price: 11.99 },
      { name: "Spaghetti & Clams", desc: "(White or Red)", price: 15.99 },
      { name: "Chicken Parm Over Linguine", desc: "", price: 14.99 },
      { name: "Chicken or Shrimp Alfredo", desc: "", price: 14.99 },
      { name: "Cajun Pasta", desc: "Chicken, Shrimp, Sausage, Peppers & Onion, Cajun Alfredo", price: 16.99 },
    ]
  },
  salads: {
    title: "SALADS",
    items: [
      { name: "Chef Salad", desc: "Turkey, Ham, Swiss, American, Tomato, Onions, Hard Boiled Eggs on a bed of Lettuce", price: 13.99 },
      { name: "Chicken Caesar", desc: "", price: 12.99 },
      { name: "Cranberry Walnut", desc: "Dried Cranberries, Walnuts, Mandarin Oranges", price: 12.99 },
      { name: "Taco Salad", desc: "Lettuce, Tomato, Onion, Jalapeno, Cheese, Black Olives, Taco Beef", price: 12.99 },
      { name: "Teriyaki Chicken", desc: "Lettuce, Tomato, Mandarin Oranges, Chicken Chow Mein noodles", price: 13.99 },
      { name: "Stuff Tomato", desc: "Tuna, Chicken or Egg", price: 7.49 },
    ]
  },
  soup: {
    title: "SOUP & SALAD",
    items: [
      { name: "Cup Soup", desc: "", price: 4.99 },
      { name: "Bowl Soup", desc: "", price: 6.99 },
      { name: "House Salad", desc: "", price: 5.99 },
      { name: "Caesar Salad", desc: "", price: 5.49 },
    ]
  },
  sides: {
    title: "SIDES",
    items: [
      { name: "Mash or Baked Potato", desc: "", price: 4.29 },
      { name: "Make it Loaded", desc: "$2.49 extra", price: 2.49 },
      { name: "Fries", desc: "", price: 4.29 },
      { name: "Slaw", desc: "", price: 4.29 },
      { name: "Cottage Cheese", desc: "", price: 4.29 },
      { name: "Onion Ring", desc: "", price: 4.29 },
      { name: "Potato Salad", desc: "", price: 4.29 },
      { name: "Sauté Mushroom", desc: "", price: 4.29 },
      { name: "Hushpuppies", desc: "", price: 4.29 },
      { name: "Tomato Slice", desc: "", price: 4.29 },
      { name: "Apple Sauce", desc: "", price: 4.29 },
      { name: "Pineapple Rings", desc: "", price: 4.29 },
      { name: "Veggie of the day", desc: "", price: 4.29 },
    ]
  },
  kids: {
    title: "KIDS MENU",
    subtitle: "(12 and Under) - Includes 1 side and Drink",
    items: [
      { name: "Spaghetti & Meatballs", desc: "(No Side)", price: 6.99 },
      { name: "Chicken Fingers", desc: "", price: 6.99 },
      { name: "Grill Cheese", desc: "", price: 6.99 },
      { name: "Cheese Burger", desc: "", price: 6.99 },
      { name: "Hot Dog", desc: "", price: 6.99 },
    ]
  },
  drinks: {
    title: "DRINKS",
    items: [
      { name: "Fresh Brewed All Bev or Iced Tea", desc: "", price: 2.99 },
      { name: "Coffee or Hot Tea", desc: "", price: 2.49 },
    ]
  },
  desserts: {
    title: "DESSERTS",
    subtitle: "Ask your Server about Pies, Cakes & Ice cream",
    items: [
      { name: "Coconut Cream Pie", desc: "", price: 6.99 },
      { name: "Key lime Pie", desc: "", price: 6.49 },
      { name: "Chocolate Pie", desc: "", price: 5.99 },
      { name: "Ice Cream", desc: "", price: 3.99 },
    ]
  },
  extras: {
    title: "EXTRAS",
    items: [
      { name: "Extra Dressing or Sauce", desc: "", price: 1.00 },
      { name: "Bacon", desc: "", price: 3.00 },
      { name: "Chicken", desc: "", price: 3.00 },
      { name: "Cheese", desc: "", price: 1.00 },
    ]
  },
} satisfies Record<string, MenuSection>

type MenuCategory = keyof typeof menuSections

export default function MenuPreview() {
  const [activeTab, setActiveTab] = useState<MenuCategory>('earlybird')

  const categoryLabels: Record<MenuCategory, string> = {
    earlybird: 'EARLY BIRD',
    appetizers: 'APPETIZERS',
    lunch: 'LUNCH',
    clubs: 'CLUBS',
    wraps: 'WRAPS',
    hoagies: 'HOAGIES',
    burgers: 'BURGERS',
    wings: 'WINGS',
    dinner: 'DINNER',
    pasta: 'PASTA',
    salads: 'SALADS',
    soup: 'SOUP & SALAD',
    sides: 'SIDES',
    kids: 'KIDS',
    drinks: 'DRINKS',
    desserts: 'DESSERTS',
    extras: 'EXTRAS',
  }

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-diner-cream to-white">
      <div className="container mx-auto px-4">
        
        {/* Menu Header - Vintage Style */}
        <div className="text-center mb-12">
          <div className="inline-block bg-diner-dark text-white px-8 py-4 transform -rotate-1 shadow-xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              ◈ MENU ◈
            </h2>
            <p className="text-diner-yellow text-sm tracking-widest">ALL MADE FRESH TO ORDER</p>
          </div>
        </div>

        {/* Diner Check Style Menu */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white shadow-2xl border-2 border-diner-dark relative">
            {/* Check Header */}
            <div className="bg-diner-yellow border-b-4 border-diner-dark px-6 py-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold text-lg">FRANK'S RESTAURANT</div>
                  <div className="text-sm">15925 US-19, Hudson, FL 34667 • (727) 268-9259</div>
                </div>
                <div className="text-right">
                  <div className="text-sm">CHECK #0852</div>
                  <div className="text-xs">{new Date().toLocaleDateString()}</div>
                </div>
              </div>
            </div>

            {/* Category Tabs - Scrollable */}
            <div className="flex border-b-2 border-diner-dark bg-diner-cream overflow-x-auto">
              {(Object.keys(menuSections) as MenuCategory[]).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`flex-shrink-0 px-4 py-3 font-bold uppercase text-xs md:text-sm transition-all whitespace-nowrap ${
                    activeTab === category
                      ? 'bg-white text-diner-red border-t-4 border-diner-red'
                      : 'text-diner-dark hover:bg-white/50'
                  }`}
                >
                  {categoryLabels[category]}
                </button>
              ))}
            </div>

            {/* Menu Items - Receipt Style */}
            <div className="p-6 md:p-8 font-mono text-sm max-h-[600px] overflow-y-auto">
              {/* Section Title */}
              <div className="mb-4 pb-2 border-b-2 border-diner-dark">
                <h3 className="text-2xl font-bold text-diner-red uppercase">
                  {menuSections[activeTab as keyof typeof menuSections].title}
                </h3>
                {menuSections[activeTab as keyof typeof menuSections].subtitle && (
                  <p className="text-xs text-diner-dark/70 mt-1 italic">
                    {menuSections[activeTab as keyof typeof menuSections].subtitle}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                {menuSections[activeTab].items.map((item, idx) => (
                  <div key={idx} className="border-b border-dashed border-diner-dark/30 pb-3 hover:bg-diner-yellow/10 px-2 transition-all cursor-pointer group">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-diner-dark text-base">
                          {item.name}
                          </span>
                          {item.hot && (
                            <span className="text-xs bg-diner-red text-white px-2 py-0.5 rounded">HOT</span>
                          )}
                        </div>
                        {item.desc && (
                          <div className="text-xs text-diner-dark/60 mt-1">
                            {item.desc}
                          </div>
                        )}
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="font-bold text-lg text-diner-red">
                          ${item.price.toFixed(2)}
                        </div>
                        <button className="text-xs bg-diner-dark text-white px-2 py-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          ADD
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Check Footer */}
              <div className="mt-8 pt-4 border-t-2 border-diner-dark">
                <div className="flex justify-between text-xs mb-2">
                  <span>SUBTOTAL</span>
                  <span>----</span>
                </div>
                <div className="flex justify-between text-xs mb-2">
                  <span>TAX</span>
                  <span>----</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t-2 border-diner-dark pt-2 mt-2">
                  <span>TOTAL</span>
                  <span>$0.00</span>
                </div>
                <div className="text-center mt-4 text-xs">
                  ★ THANK YOU FOR DINING WITH US! ★
                </div>
              </div>
            </div>

            {/* Torn Edge Effect */}
            <div className="absolute -bottom-4 left-0 right-0 h-4 bg-white" style={{
              clipPath: 'polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0, 100% 0, 0 0)'
            }}></div>
          </div>

          {/* Fun Note */}
          <div className="text-center mt-8">
            <div className="inline-block bg-diner-red text-white px-6 py-3 transform rotate-1 shadow-lg">
              <p className="font-bold">📞 Call ahead for takeout: (727) 268-9259</p>
              <p className="text-sm mt-1">CHECK OUT OUR DAILY SPECIALS & HOMEMADE SOUP</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

