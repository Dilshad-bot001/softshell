import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface FormData {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  company?: string;
  licenseType?: string;
  message?: string;
}

const ContactForm = () => {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  })

  const [errors, setErrors] = useState<Errors>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const validate = (): Errors => {
    const newErrors: Errors = {}
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.company) newErrors.company = 'Company is required'
    if (!formData.licenseType) newErrors.licenseType = 'License type is required'
    if (!formData.message) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully!')
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: ''
      })
      setErrors({})
    } else {
      setErrors(validationErrors)
    }
  }

  return (
    <section className='w-full py-12 md:py-24'>
      <div className='container mx-auto px-4'>
        <h2 className='text-center font-bold mb-12 text-[#1F1F1F] text-2xl md:text-3xl lg:text-5xl'>Get in Touch</h2>
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className='max-w-lg mx-auto bg-[#f1f1f1] p-8 rounded-lg shadow-lg'
        >
          <div className='mb-4'>
            <label className='block text-[#1F1F1F]' htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className={'w-full p-3 border rounded-lg text-[#6D7C79] bg-white'}
            />
            {errors.name && <p className='text-red-500'>{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-[#1F1F1F] mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg text-[#6D7C79] bg-white"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-[#1F1F1F] mb-2" htmlFor="company">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg text-[#6D7C79] bg-white"
            />
            {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-[#1F1F1F] mb-2" htmlFor="licenseType">
              License Type
            </label>
            <select
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg text-[#6D7C79] bg-white"
            >
              <option value="">Select License Type</option>
              <option value="saas">SaaS</option>
              <option value="perpetual">Perpetual</option>
              <option value="subscription">Subscription</option>
            </select>
            {errors.licenseType && <p className="text-red-500 text-sm">{errors.licenseType}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-[#1F1F1F] mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg text-[#6D7C79] bg-white"
              rows={5}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-[#3A5DD8] text-white p-3 rounded-lg font-semibold hover:bg-blue-950"
          >Submit</button>
        </motion.form>
      </div >
    </section >
  )
}

export default ContactForm