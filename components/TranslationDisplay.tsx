'use client'

import { useState } from 'react'
import { FaLeaf, FaFish, FaEgg, FaBreadSlice, FaInfoCircle, FaStar, FaGlassCheers } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'

interface MenuItem {
  id: number
  originalName: string
  translatedName: string
  description: string
  ingredients: string[]
  preparation: string
  origin: string
  allergens: string[]
  price: string
  image: string
  rating: number
  spicyLevel?: number
}

const sampleMenuItems: MenuItem[] = [
  {
    id: 1,
    originalName: 'Spaghetti alla Carbonara',
    translatedName: 'Carbonara Pasta',
    description: 'Classic Roman pasta dish with a creamy sauce made from eggs, cheese, and guanciale (cured pork cheek)',
    ingredients: ['Spaghetti', 'Guanciale', 'Eggs', 'Pecorino Romano', 'Black pepper'],
    preparation: 'Tossed with egg-cheese mixture and crispy guanciale',
    origin: 'Rome, Italy',
    allergens: ['Gluten', 'Eggs', 'Dairy'],
    price: '$18',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&q=80',
    rating: 4.8,
  },
  {
    id: 2,
    originalName: 'Risotto ai Funghi Porcini',
    translatedName: 'Porcini Mushroom Risotto',
    description: 'Creamy Arborio rice slowly cooked with wild porcini mushrooms, white wine, and Parmigiano-Reggiano',
    ingredients: ['Arborio rice', 'Porcini mushrooms', 'White wine', 'Parmesan', 'Butter', 'Shallots'],
    preparation: 'Slowly stirred with hot broth until creamy',
    origin: 'Northern Italy',
    allergens: ['Dairy', 'Alcohol'],
    price: '$22',
    image: 'https://images.unsplash.com/photo-1476124369491-c74a2f663097?w=400&q=80',
    rating: 4.9,
  },
  {
    id: 3,
    originalName: 'Osso Buco alla Milanese',
    translatedName: 'Milanese-Style Braised Veal Shanks',
    description: 'Tender veal shanks slowly braised in white wine with vegetables, served with gremolata and risotto',
    ingredients: ['Veal shanks', 'White wine', 'Tomatoes', 'Carrots', 'Celery', 'Lemon zest', 'Garlic'],
    preparation: 'Braised for 2-3 hours until fall-off-the-bone tender',
    origin: 'Milan, Italy',
    allergens: ['Alcohol'],
    price: '$32',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80',
    rating: 4.7,
  },
  {
    id: 4,
    originalName: 'Insalata Caprese',
    translatedName: 'Caprese Salad',
    description: 'Fresh mozzarella, ripe tomatoes, and basil leaves drizzled with extra virgin olive oil and balsamic glaze',
    ingredients: ['Buffalo mozzarella', 'Tomatoes', 'Fresh basil', 'Olive oil', 'Balsamic vinegar', 'Sea salt'],
    preparation: 'Freshly sliced and artfully arranged',
    origin: 'Capri, Italy',
    allergens: ['Dairy'],
    price: '$14',
    image: 'https://images.unsplash.com/photo-1592417817038-d13a8ea32772?w=400&q=80',
    rating: 4.6,
  },
  {
    id: 5,
    originalName: 'Branzino al Forno',
    translatedName: 'Oven-Roasted Sea Bass',
    description: 'Whole Mediterranean sea bass roasted with herbs, lemon, and white wine, served with seasonal vegetables',
    ingredients: ['Sea bass', 'Lemon', 'Rosemary', 'Thyme', 'White wine', 'Cherry tomatoes', 'Olives'],
    preparation: 'Roasted whole until flaky and tender',
    origin: 'Mediterranean Coast',
    allergens: ['Fish', 'Alcohol'],
    price: '$28',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80',
    rating: 4.8,
  },
  {
    id: 6,
    originalName: 'Tiramisu',
    translatedName: 'Pick-Me-Up Dessert',
    description: 'Layers of espresso-soaked ladyfinger cookies with mascarpone cream, dusted with cocoa powder',
    ingredients: ['Ladyfingers', 'Mascarpone', 'Espresso', 'Eggs', 'Sugar', 'Cocoa powder', 'Marsala wine'],
    preparation: 'Layered and chilled for several hours',
    origin: 'Veneto, Italy',
    allergens: ['Gluten', 'Eggs', 'Dairy', 'Alcohol'],
    price: '$12',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80',
    rating: 4.9,
  },
]

const allergenIcons: { [key: string]: any } = {
  Gluten: FaBreadSlice,
  Eggs: FaEgg,
  Dairy: FaGlassCheers,
  Fish: FaFish,
}

export default function TranslationDisplay() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  return (
    <div className="space-y-6">
      {/* Menu Grid */}
      <div className="grid sm:grid-cols-2 gap-6">
        {sampleMenuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all cursor-pointer border border-gray-100 hover:border-primary"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.translatedName}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full font-bold text-gray-900">
                {item.price}
              </div>
              <div className="absolute top-3 left-3 bg-secondary/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-white text-sm font-semibold">
                <FaStar className="text-yellow-300" />
                {item.rating}
              </div>
            </div>

            <div className="p-5 space-y-3">
              <div>
                <p className="text-sm text-gray-500 italic">{item.originalName}</p>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {item.translatedName}
                </h3>
              </div>

              <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>

              {/* Allergen Icons */}
              {item.allergens.length > 0 && (
                <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                  <span className="text-xs text-gray-500">Contains:</span>
                  <div className="flex gap-2">
                    {item.allergens.slice(0, 3).map((allergen) => {
                      const Icon = allergenIcons[allergen] || FaInfoCircle
                      return (
                        <div
                          key={allergen}
                          className="w-7 h-7 bg-red-50 rounded-full flex items-center justify-center"
                          title={allergen}
                        >
                          <Icon className="text-red-600 text-xs" />
                        </div>
                      )
                    })}
                    {item.allergens.length > 3 && (
                      <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-xs text-gray-600 font-semibold">
                        +{item.allergens.length - 3}
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="pt-2">
                <button className="text-primary font-semibold text-sm hover:underline flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Details
                  <FaInfoCircle />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="relative h-64 overflow-hidden rounded-t-3xl">
              <img
                src={selectedItem.image}
                alt={selectedItem.translatedName}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all shadow-lg"
              >
                <MdClose className="text-xl" />
              </button>
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-2xl text-gray-900">
                {selectedItem.price}
              </div>
            </div>

            <div className="p-8 space-y-6">
              <div>
                <p className="text-gray-500 italic mb-1">{selectedItem.originalName}</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedItem.translatedName}
                </h2>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-semibold">Origin:</span>
                  <span>{selectedItem.origin}</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span className="font-semibold">{selectedItem.rating}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed">{selectedItem.description}</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-3">Main Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.ingredients.map((ingredient, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-indigo-50 text-primary rounded-full text-sm font-medium"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Preparation</h3>
                <p className="text-gray-700">{selectedItem.preparation}</p>
              </div>

              {selectedItem.allergens.length > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                    <FaInfoCircle />
                    Allergen Information
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedItem.allergens.map((allergen, idx) => {
                      const Icon = allergenIcons[allergen] || FaInfoCircle
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg"
                        >
                          <Icon className="text-red-600" />
                          <span className="text-sm font-medium text-red-900">{allergen}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              <button
                onClick={() => setSelectedItem(null)}
                className="w-full py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
