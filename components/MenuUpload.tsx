'use client'

import { useState, useRef } from 'react'
import { FaCamera, FaUpload, FaImage } from 'react-icons/fa'

interface MenuUploadProps {
  onImageUpload: (imageData: string) => void
}

export default function MenuUpload({ onImageUpload }: MenuUploadProps) {
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onloadend = () => {
        onImageUpload(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const useSampleMenu = () => {
    // Use a sample menu image
    onImageUpload('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80')
  }

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`relative border-3 border-dashed rounded-2xl p-12 text-center transition-all ${
          dragActive
            ? 'border-primary bg-indigo-50 scale-105'
            : 'border-gray-300 bg-gray-50 hover:border-primary hover:bg-indigo-50'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
        />

        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <FaUpload className="text-primary text-3xl" />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Upload Your Menu
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Drag and drop your menu photo here, or click to browse
            </p>
          </div>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl"
          >
            Choose File
          </button>

          <div className="text-sm text-gray-500">
            Supports: JPG, PNG, HEIC • Max size: 10MB
          </div>
        </div>
      </div>

      {/* Alternative Options */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-500">Or try a sample</span>
        </div>
      </div>

      {/* Sample Menu Options */}
      <div className="grid sm:grid-cols-3 gap-4">
        <button
          onClick={useSampleMenu}
          className="group relative overflow-hidden rounded-xl aspect-square bg-gray-200 hover:ring-4 hover:ring-primary/50 transition-all"
        >
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80"
            alt="Italian menu"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <span className="text-white font-semibold">Italian Menu</span>
          </div>
        </button>

        <button
          onClick={useSampleMenu}
          className="group relative overflow-hidden rounded-xl aspect-square bg-gray-200 hover:ring-4 hover:ring-primary/50 transition-all"
        >
          <img
            src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80"
            alt="Japanese menu"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <span className="text-white font-semibold">Japanese Menu</span>
          </div>
        </button>

        <button
          onClick={useSampleMenu}
          className="group relative overflow-hidden rounded-xl aspect-square bg-gray-200 hover:ring-4 hover:ring-primary/50 transition-all"
        >
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80"
            alt="French menu"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <span className="text-white font-semibold">French Menu</span>
          </div>
        </button>
      </div>

      {/* Instructions */}
      <div className="bg-indigo-50 rounded-xl p-6 space-y-3">
        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
          <FaCamera className="text-primary" />
          Tips for Best Results
        </h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>Ensure good lighting and clear focus</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>Capture the entire menu item with pricing</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>Avoid glare or shadows on the menu</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>Works with handwritten or printed menus</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
