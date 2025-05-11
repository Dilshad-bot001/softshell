import React, { JSX } from 'react'
import { motion } from 'framer-motion';
import { ShieldUserIcon, Clock, Users, CreditCardIcon } from 'lucide-react';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <ShieldUserIcon size={40} />,
    title: 'Secure Transactions',
    description: 'Your data and transactions are protected with top-tier security.',
  },
  {
    icon: <Clock size={40} />,
    title: 'Fast Process',
    description: 'Get your valuation and payment in record time.',
  },
  {
    icon: <Users size={40} />,
    title: 'Trusted by Thousands',
    description: 'Join a community of satisfied sellers.',
  },
  {
    icon: <CreditCardIcon size={40} />,
    title: 'Fair Valuations',
    description: 'Transparent and competitive pricing for your licenses.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 flex flex-col items-center md:px-6">
        <h2 className="font-bold mb-4 text-[#1F1F1F] text-2xl md:text-3xl lg:text-5xl">Why Choose SoftSell?</h2>
        <p className="text-xl text-[#6D7C79] mb-12">
          Reason's why we are the best in the business
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#3A5DD8] flex flex-col items-start justify-between py-8 px-6 w-72 h-72 rounded-2xl text-white"
            >
              <div>
                <div className="text-white mb-6">{feature.icon}</div>
                <h3 className="font-semibold mb-1 lg:text-2xl">{feature.title}</h3>
                <p className="text-[#d5d5d5] mb-4 lg:text-lg">{feature.description}</p>
              </div>
              <span className='text-lg cursor-pointer'>learn more...</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs