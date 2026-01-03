'use client'

import { motion } from 'framer-motion'
import { Code, Cloud, Layers, Zap } from 'lucide-react'

const About = () => {
  const focusCards = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Modern web applications with React, Next.js, and robust backend systems',
    },
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure',
      description: 'Scalable cloud solutions, DevOps practices, and system optimization',
    },
    {
      icon: Layers,
      title: 'System Architecture',
      description: 'Designing resilient, maintainable software architectures at scale',
    },
    {
      icon: Zap,
      title: 'Application Development',
      description: 'End-to-end Application Development from concept to production & Deployment',
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-24 bg-graphite/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          {/* Left: Narrative */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            >
              Crafting Digital Excellence
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg text-gray-300 space-y-4"
            >
              <p>
                Innovative Full Stack Developer & Cloud Engineer with 4+ years of experience designing 
                scalable systems, modern applications, and cloud environments. Skilled in API-driven 
                architecture, DevOps automation, and secure cloud deployment.
              </p>
              <p>
                Recognized for improving performance, reducing workloads, and driving technical excellence 
                in fast-paced environments. Winner of Empire Partners Foundation Hackathon (2022) and 
                3rd Place at Ekurhuleni AI Hackathon (2024).
              </p>
              <p>
                Delivered 20+ production-ready web applications and enterprise solutions, improved 
                operational efficiency by ~30% through CRM automation, and reduced SQL load times by 25% 
                via optimization.
              </p>
            </motion.div>
          </div>
          
          {/* Right: Tech Focus Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {focusCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-xl cursor-glow group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-accent-blue/20 rounded-lg group-hover:bg-accent-blue/30 transition-colors">
                    <card.icon className="w-8 h-8 text-accent-blue" />
                  </div>
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About