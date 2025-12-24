'use client'

import { motion } from 'framer-motion'
import { Mail, Calendar, ArrowRight } from 'lucide-react'

const CallToAction = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-graphite to-dark-base relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-6xl font-bold"
          >
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-accent-blue to-accent-violet bg-clip-text text-transparent">
              Exceptional
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to transform your ideas into scalable, high-performance software solutions? 
            Let's discuss how we can work together to achieve your goals.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="mailto:tiisomabogwane81@gmail.com?subject=Project Inquiry&body=Hi Tiiso, I would like to discuss a project with you."
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-accent-blue text-dark-base px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all cursor-glow"
            >
              <Mail className="w-5 h-5" />
              Send Email
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="https://wa.me/27848744120?text=Hi%20Tiiso,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group glass px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center gap-3 hover:bg-white hover:bg-opacity-10 transition-all cursor-glow"
            >
              <Calendar className="w-5 h-5" />
              WhatsApp Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
          
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="pt-12 border-t border-gray-700"
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>tiisomabogwane81@gmail.com</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full" />
              <div className="flex items-center gap-2">
                <span>Available for new opportunities</span>
                <div className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction