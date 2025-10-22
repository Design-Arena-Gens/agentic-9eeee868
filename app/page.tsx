'use client'

import { useState } from 'react'
import { FaCamera, FaUpload, FaLanguage, FaUtensils, FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import { MdRestaurantMenu, MdTranslate } from 'react-icons/md'
import MenuUpload from '@/components/MenuUpload'
import TranslationDisplay from '@/components/TranslationDisplay'

export default function Home() {
  const [showDemo, setShowDemo] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MdRestaurantMenu className="text-primary text-3xl" />
              <span className="text-xl font-bold text-gray-900">MenuAI</span>
            </div>
            <button
              onClick={() => setShowDemo(true)}
              className="px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg"
            >
              Try Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-indigo-100 text-primary rounded-full text-sm font-semibold">
                  AI-Powered Translation
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Never Get Lost in Translation
                <span className="text-primary"> Again</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Instantly understand any restaurant menu in any language. Our AI translates, explains ingredients,
                identifies allergens, and shows you exactly what you're ordering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowDemo(true)}
                  className="group px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Try a Demo
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-full font-semibold text-lg hover:bg-indigo-50 transition-all">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-200 to-emerald-200">
                <img
                  src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80"
                  alt="Restaurant menu"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <FaCheckCircle className="text-white text-2xl" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">1M+ Translations</p>
                    <p className="text-sm text-gray-600">Trusted worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to understand any menu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-white hover:shadow-xl transition-all cursor-pointer">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaCamera className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                1. Snap or Upload
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Take a photo of the menu or upload an existing image. Our AI works with any language or script.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-white hover:shadow-xl transition-all cursor-pointer">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MdTranslate className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                2. AI Translates
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our advanced AI instantly recognizes and translates every item with context-aware accuracy.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-white hover:shadow-xl transition-all cursor-pointer">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaUtensils className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                3. Explore & Order
              </h3>
              <p className="text-gray-600 leading-relaxed">
                See detailed descriptions, ingredients, allergens, and photos to order with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to dine abroad with confidence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FaLanguage, title: 'Multi-Language', desc: '100+ languages supported' },
              { icon: FaUtensils, title: 'Food Images', desc: 'See what you order' },
              { icon: FaCheckCircle, title: 'Allergen Alerts', desc: 'Stay safe & informed' },
              { icon: MdTranslate, title: 'Cultural Context', desc: 'Learn dish origins' },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                <feature.icon className="text-primary text-3xl mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Try It Out?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Experience the future of dining abroad. No signup required.
          </p>
          <button
            onClick={() => setShowDemo(true)}
            className="px-10 py-5 bg-white text-primary rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl"
          >
            Launch Demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MdRestaurantMenu className="text-primary text-2xl" />
            <span className="text-lg font-bold text-white">MenuAI</span>
          </div>
          <p className="text-sm">
            © 2024 MenuAI. Making dining abroad accessible to everyone.
          </p>
        </div>
      </footer>

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">Try AI Menu Translator</h3>
              <button
                onClick={() => setShowDemo(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <DemoContent />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function DemoContent() {
  const [menuImage, setMenuImage] = useState<string | null>(null)
  const [isTranslating, setIsTranslating] = useState(false)
  const [showTranslation, setShowTranslation] = useState(false)

  const handleImageUpload = (imageData: string) => {
    setMenuImage(imageData)
    setIsTranslating(true)

    // Simulate AI processing
    setTimeout(() => {
      setIsTranslating(false)
      setShowTranslation(true)
    }, 2500)
  }

  const handleReset = () => {
    setMenuImage(null)
    setShowTranslation(false)
    setIsTranslating(false)
  }

  return (
    <div>
      {!menuImage && <MenuUpload onImageUpload={handleImageUpload} />}

      {isTranslating && (
        <div className="text-center py-20">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary mb-6"></div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Analyzing Menu...</h3>
          <p className="text-gray-600">Our AI is translating and identifying dishes</p>
        </div>
      )}

      {showTranslation && (
        <div>
          <div className="mb-6 flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-900">Translated Menu</h3>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all"
            >
              Try Another
            </button>
          </div>
          <TranslationDisplay />
        </div>
      )}
    </div>
  )
}
