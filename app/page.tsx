'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { div, pre } from 'framer-motion/client'
import Image from 'next/image'
import { MoonIcon, SunIcon } from 'lucide-react'

import HowItWorks from '@/components/HowItWorks'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import ChatWidget from '@/components/ChatWidget'
import Logo from '@/public/logo.png'

const Home = () => {

  const [darkMode, setDarkMode] = useState<boolean>(false)

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
    document.documentElement.classList.toggle('dark')
    console.log(darkMode)
  }

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <header className='w-full flex justify-between items-center h-20 px-10 bg-white text-[#6D7C79]'>
        <Image src={Logo} alt='logo' className='w-10 h-10' />
        <ul className='gap-6 hidden md:flex'>
          <a href="#Home" className='nav'><li>Home</li></a>
          <a href="#HowItWorks" className='nav'><li>How It Works</li></a>
          <a href="#WhyChooseUs" className='nav'><li>Why Choose Us</li></a>
          <a href="#Testimonials" className='nav'><li>Testimonials</li></a>
          <a href="#Contact" className='nav'><li>Contact</li></a>
        </ul>
        <button
          onClick={toggleDarkMode}
          // className='fixed top-4 right-4 p-2 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
          className='p-2 rounded-full bg-transparent border border-[#3A5DD8] text-[#3A5DD8]'
          aria-label='Toggle dark mode'
        >
          {darkMode ? 
          <MoonIcon className='w-6 h-6' /> : <SunIcon className='w-6 h-6' />}
        </button>
      </header>
      <motion.div
        className="min-h-screen bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
        <ChatWidget />
      </motion.div>

    </div>
  )
}

export default Home