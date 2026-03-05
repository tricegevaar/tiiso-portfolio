'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openWhatsApp = () => {
    window.open('https://wa.me/27848744120?text=Hi%20Tiiso,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.', '_blank')
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 bg-white rounded-lg shadow-2xl p-4 max-w-xs"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-accent-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TM</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Tiiso Mabogwane</h4>
                  <p className="text-xs text-gray-500">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-3 mb-3">
              <p className="text-sm text-gray-700">
                👋 Hi there! Ready to discuss your next project? Let's chat on WhatsApp!
              </p>
            </div>
            
            <button
              onClick={openWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={16} />
              Start Chat
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}

export default WhatsAppWidget