'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Achievements from '@/components/Achievements'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import CallToAction from '@/components/CallToAction'
import Navigation from '@/components/Navigation'
import WhatsAppWidget from '@/components/WhatsAppWidget'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-base">
      <Navigation />
      <Hero />
      <About />
      <Achievements />
      <Skills />
      <Projects />
      <Experience />
      <CallToAction />
      <WhatsAppWidget />
    </main>
  )
}