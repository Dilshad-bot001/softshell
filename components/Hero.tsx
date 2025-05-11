import React from 'react'
import { motion } from 'framer-motion'
import { SignInButton } from '@clerk/nextjs'

const Hero = () => {
  return (
    <section className='py-20'>
      <div className='container mx-auto px-4 text-center'>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-4xl font-bold mb-4 text-[#1F1F1F] md:text-6xl lg:text-8xl  lg:leading-28'
        >
          Sell Your Unused <br />Software Licenses
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-lg mb-10 text-[#6D7C79] lg:text-xl'
        >
          Get paid fast with SoftSell's secure and easy process.
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SignInButton mode='modal'>
              <button className='bg-[#3A5DD8] text-white py-3 px-6 rounded-lg text-lg font-semibold lg:text-xl hover:bg-[#141f48]'>
                Get a Quote
              </button>
            </SignInButton>
          </motion.div>
      </div>
    </section>
  )
}

export default Hero