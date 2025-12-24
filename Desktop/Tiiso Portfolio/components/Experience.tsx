'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      role: 'Facilitator (Full Stack Development)',
      company: 'AB4IR',
      period: 'Apr 2025 – Sep 2025',
      location: 'South Africa',
      achievements: [
        'Taught HTML, CSS, JavaScript, PHP, MySQL to aspiring developers',
        'Students achieved 300/375 average hackathon score under my guidance',
        'Delivered comprehensive training in business communication and public speaking',
        'Led teams to build LMS, e-commerce and budgeting systems',
      ],
    },
    {
      role: 'Full Stack Developer (Freelance)',
      company: 'Alphadot X',
      period: 'Jan 2025 – Mar 2025',
      location: 'Remote',
      achievements: [
        'Rebuilt Ubuhlebezwe Municipality website with modern UI and optimized backend',
        'Integrated Zoho CRM workflows reducing manual admin by ~30%',
        'Migrated FoodBev infrastructure to improved cloud systems',
        'Developed optimized REST APIs and automated deployments',
        'Rebuilt Tree-of-Light backend using PostgreSQL + Angular',
      ],
    },
    {
      role: 'Microsoft Azure Administrator',
      company: 'Netcampus',
      period: 'Feb 2024 – Jan 2025',
      location: 'South Africa',
      achievements: [
        'Managed Azure VMs, Networking, Storage, and Azure Active Directory',
        'Implemented scalable, cost-efficient cloud environments',
        'Automated Azure tasks using PowerShell and Azure CLI',
        'Enhanced monitoring with Azure Monitor and Site24x7',
      ],
    },
    {
      role: 'Junior Full Stack Developer',
      company: 'AB4IR',
      period: 'Jan 2022 – Dec 2023',
      location: 'South Africa',
      achievements: [
        'Developed Learning Management System used by 50+ daily users',
        'Built Point of Sale system with automated receipt generation',
        'Developed hotel booking system using Java + MySQL',
        'Improved SQL performance by 25% through query optimization',
        'Built responsive UIs and integrated third-party APIs',
      ],
    },
  ]

  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Professional Journey
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Building impactful software solutions across diverse industries and scales
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-violet to-accent-emerald" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative pl-16 sm:pl-20"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute left-4 sm:left-6 top-6 w-4 h-4 bg-accent-blue rounded-full border-4 border-dark-base"
                />
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass p-6 rounded-xl cursor-glow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <h4 className="text-xl text-accent-blue font-semibold">
                        {exp.company}
                      </h4>
                    </div>
                    
                    <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <motion.li
                        key={achievementIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: index * 0.1 + achievementIndex * 0.1 + 0.5, 
                          duration: 0.6 
                        }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <div className="w-2 h-2 bg-accent-emerald rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience