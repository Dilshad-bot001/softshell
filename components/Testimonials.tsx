import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

export const testimonials = [
    {
      quote:
        "The AI-powered interview prep was a game-changer. Landed my dream job at a top tech company!",
      author: "Sarah Chen",
      image: "https://randomuser.me/api/portraits/women/75.jpg",
      role: "Software Engineer",
      company: "Tech Giant Co.",
    },
    {
      quote:
        "The industry insights helped me pivot my career successfully. The salary data was spot-on!",
      author: "Michael Rodriguez",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      role: "Product Manager",
      company: "StartUp Inc.",
    },
    {
      quote:
        "My resume's ATS score improved significantly. Got more interviews in two weeks than in six months!",
      author: "Priya Patel",
      image: "https://randomuser.me/api/portraits/women/74.jpg",
      role: "Marketing Director",
      company: "Global Corp",
    },
  ];

const Testimonials = () => {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 flex flex-col items-center md:px-6">
        <h2 className="font-bold mb-12 text-[#1F1F1F] text-2xl md:text-3xl lg:text-5xl">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            className="flex flex-col items-start justify-between py-8 px-6 w-72 h-64 bg-[#f1f1f1] rounded-2xl space-y-4"
            >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative h-12 w-12 flex-shrink-0">
                      <Image
                        width={40}
                        height={40}
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="rounded-full object-cover border-2 border-primary/20"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1F1F1F]">{testimonial.author}</p>
                      <p className="text-sm text-[#6D7C79]">
                        {testimonial.role}
                      </p>
                      <p className="text-sm text-[#6D7C79]">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <blockquote>
                    <p className="text-[#6D7C79] italic relative">
                      <span className="text-3xl absolute -top-4 -left-2">
                        &quot;
                      </span>
                      {testimonial.quote}
                      <span className="text-3xl absolute -bottom-4">
                        &quot;
                      </span>
                    </p>
                  </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials