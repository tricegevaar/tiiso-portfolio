'use client'

import { motion } from 'framer-motion'
import { Trophy, Award, TrendingUp, Users } from 'lucide-react'

const Achievements = () => {
  const highlights = [
    {
      icon: Trophy,
      title: 'Empire Partners Foundation Hackathon',
      subtitle: 'Winner (2022)',
      description: 'First place in competitive hackathon showcasing innovative solutions',
    },
    {
      icon: Award,
      title: 'Ekurhuleni AI Hackathon',
      subtitle: '3rd Place (2024)',
      description: 'Recognized for AI-driven solution in municipal technology',
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      subtitle: '25% SQL Improvement',
      description: 'Reduced database load times through advanced query optimization',
    },
    {
      icon: Users,
      title: 'Production Applications',
      subtitle: '20+ Enterprise Solutions',
      description: 'Delivered production-ready web applications and enterprise systems',
    },
  ]

  const stats = [
    { number: '4+', label: 'Years Experience' },
    { number: '30%', label: 'Efficiency Improvement' },
    { number: '20+', label: 'Production Projects' },
    { number: '25%', label: 'SQL Performance Boost' },
  ]

  return (
    <section id="achievements" className="py-16 sm:py-24 bg-gradient-to-br from-dark-base to-graphite relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.05) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Key Highlights
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Recognized achievements and measurable impact in software development
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center glass p-6 rounded-xl"
            >
              <div className="text-3xl sm:text-4xl font-bold text-accent-blue mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glass p-6 rounded-xl cursor-glow group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent-blue/20 rounded-lg group-hover:bg-accent-blue/30 transition-colors flex-shrink-0">
                  <highlight.icon className="w-6 h-6 text-accent-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-accent-blue transition-colors">
                    {highlight.title}
                  </h3>
                  <div className="text-accent-emerald font-semibold mb-2">
                    {highlight.subtitle}
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements