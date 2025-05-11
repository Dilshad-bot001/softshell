import React, { JSX } from 'react'
import { motion } from 'framer-motion'
import { Upload, CircleDollarSign, CircleCheckBig, MoveUpRight } from 'lucide-react';

interface Step {
  icon: JSX.Element;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <Upload size={40} />,
    title: 'Upload Your License',
    description: 'Submit your softwar license detials securely.',
  },
  {
    icon: <CircleDollarSign size={40} />,
    title: 'Get Evaluation',
    description: 'Recieve a fair and transparent valuation.',
  },
  {
    icon: <CircleCheckBig size={40} />,
    title: 'Get Paid',
    description: 'Get paid quickly and securely via your preferred method.',
  },
]
const HowItWorks = () => {
  return (
    <section className='w-full py-12 md:py-24'>
      <div className='container mx-auto px-4 flex flex-col items-center md:px-5'>
        <h2 className='font-bold mb-4 text-[#1F1F1F] text-2xl md:text-3xl lg:text-5xl'>How It Works</h2>
        <p className="text-lg text-[#6D7C79] mb-12 md:text-xl">
          Three simple steps to sell your licenses
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className='flex flex-col items-start justify-between py-8 px-6 w-52 h-48 bg-[#f1f1f1] rounded-2xl md:w-64 md:h-72 lg:w-96'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className='flex justify-between text-[#3A5DD8] w-full'>
                <div className=''>{step.icon}</div>
                <MoveUpRight className='cursor-pointer' size={30} />
              </div>
              <div>
                <h3 className='text-[#1F1F1F] font-semibold mb-1 lg:text-2xl'>{step.title}</h3>
                <p className='text-[#6D7C79] lg:text-xl'>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks