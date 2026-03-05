'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories = [
    {
      category: 'Languages',
      skills: [
        { name: 'Java', context: 'Enterprise applications & backend systems' },
        { name: 'PHP', context: 'Laravel framework & web development' },
        { name: 'JavaScript', context: 'Full-stack development & modern frameworks' },
        { name: 'Python', context: 'Automation & data processing' },
        { name: 'C#', context: '.NET applications & enterprise solutions' },
        { name: 'SQL', context: 'Database design & optimization' },
      ],
    },
    {
      category: 'Frameworks',
      skills: [
        { name: 'Laravel', context: 'PHP web application framework' },
        { name: 'React', context: 'Modern UI development & SPAs' },
        { name: 'Angular', context: 'Enterprise frontend applications' },
        { name: 'Vue.js', context: 'Progressive web applications' },
        { name: 'Node.js', context: 'Server-side JavaScript & APIs' },
      ],
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        { name: 'Azure', context: 'Cloud infrastructure & services' },
        { name: 'AWS', context: 'Scalable cloud solutions' },
        { name: 'CI/CD', context: 'Automated deployment pipelines' },
        { name: 'Azure CLI', context: 'Cloud automation & management' },
        { name: 'PowerShell', context: 'Windows automation & scripting' },
        { name: 'Linux', context: 'Server administration & deployment' },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MySQL', context: 'Relational database design & optimization' },
        { name: 'PostgreSQL', context: 'Advanced SQL & data modeling' },
        { name: 'MongoDB', context: 'NoSQL & document-based storage' },
        { name: 'Firebase', context: 'Real-time database & authentication' },
      ],
    },
    {
      category: 'Specializations',
      skills: [
        { name: 'REST APIs', context: 'API design & integration' },
        { name: 'Cloud Security', context: 'Secure cloud deployments' },
        { name: 'CRM Integration', context: 'Business process automation' },
        { name: 'System Architecture', context: 'Scalable system design' },
        { name: 'LMS', context: 'Learning management systems' },
        { name: 'E-Commerce', context: 'Online retail platforms' },
        { name: 'POS Systems', context: 'Point of sale applications' },
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Technical Expertise
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable software solutions
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-accent-blue">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05, 
                      duration: 0.6 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    className="relative glass p-4 rounded-lg text-center cursor-glow group"
                  >
                    <div className="font-semibold text-white group-hover:text-accent-blue transition-colors">
                      {skill.name}
                    </div>
                    
                    {/* Hover context */}
                    {hoveredSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-dark-base border border-accent-blue/30 rounded-lg text-sm text-gray-300 whitespace-nowrap z-10"
                      >
                        {skill.context}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-accent-blue/30" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills