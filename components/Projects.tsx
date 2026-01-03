'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const Projects = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const projects = [
    {
      name: 'Nexora Technologies',
      problem: 'Modern technology company website with professional design and services showcase',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'TypeScript'],
      impact: 'Professional web presence for tech company',
      image: '/images/projects/nexora-technologies.svg',
      imageAlt: 'Nexora Technologies Website',
      liveDemo: 'https://nexora-technologiies.vercel.app/',
    },
    {
      name: 'Venda Experience',
      problem: 'Takealot personal shopper service platform with seamless shopping experience',
      technologies: ['Next.js', 'React', 'JavaScript', 'CSS', 'Vercel'],
      impact: 'Personal shopping service platform',
      image: '/images/projects/venda-experience.svg',
      imageAlt: 'Venda Experience - Takealot Personal Shopper Platform',
      liveDemo: 'https://venda-experience.vercel.app/',
    },
    {
      name: 'Ubuhlebezwe Municipality Website',
      problem: 'Modern municipal website with optimized backend and CRM integration',
      technologies: ['PHP', 'Laravel', 'MySQL', 'Zoho CRM', 'JavaScript'],
      impact: '30% reduction in manual admin tasks',
      image: '/images/projects/municipality-website.svg',
      imageAlt: 'Ubuhlebezwe Municipality Website',
    },
    {
      name: 'Learning Management System',
      problem: 'Comprehensive LMS platform for educational institutions',
      technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Bootstrap'],
      impact: '50+ daily active users',
      image: '/images/projects/lms-platform.svg',
      imageAlt: 'Learning Management System Dashboard',
    },
    {
      name: 'Point of Sale System',
      problem: 'Automated POS system with receipt generation and inventory management',
      technologies: ['Java', 'MySQL', 'JavaFX', 'REST APIs'],
      impact: 'Automated receipt generation',
      image: '/images/projects/pos-system.svg',
      imageAlt: 'Point of Sale System Interface',
    },
    {
      name: 'Hotel Booking System',
      problem: 'Complete hotel reservation and management platform',
      technologies: ['Java', 'MySQL', 'Spring Boot', 'JavaScript'],
      impact: '25% improvement in SQL performance',
      image: '/images/projects/hotel-booking.svg',
      imageAlt: 'Hotel Booking System',
    },
  ]

  return (
    <section id="projects" className="py-16 sm:py-24 bg-graphite/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world solutions that drive business impact and technical innovation
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass rounded-xl overflow-hidden group cursor-glow"
            >
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-accent-blue/20 to-accent-violet/20">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to gradient background if image fails to load
                    e.currentTarget.style.display = 'none'
                  }}
                />
                {/* Fallback content when image is loading or fails */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-violet/10 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/10">
                    {project.name.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-accent-blue transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {project.problem}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent-blue/20 text-accent-blue text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Impact */}
                <div className="flex items-center gap-2 text-accent-emerald">
                  <div className="w-2 h-2 bg-accent-emerald rounded-full" />
                  <span className="font-semibold">{project.impact}</span>
                </div>
                
                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  {project.liveDemo ? (
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 bg-accent-blue text-dark-base px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Demo
                    </motion.a>
                  ) : (
                    <motion.button
                      onClick={scrollToContact}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 bg-accent-blue text-dark-base px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                    >
                      Get In Touch
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  )}
                  
                  <motion.button
                    onClick={scrollToContact}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 glass px-4 py-2 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Discuss Project
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects