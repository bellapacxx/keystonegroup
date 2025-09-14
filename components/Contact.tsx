"use client"

import { motion } from "framer-motion"
import { FaEnvelope } from "react-icons/fa"

export default function Contact() {
  return (
    <section className="relative py-16 px-6 bg-brand-800">
      <h2 className="text-3xl font-bold text-mint-500 mb-12 text-center">
        Contact Us
      </h2>

      {/* Floating background shapes */}
      <div className="absolute -top-16 -left-16 w-40 h-40 bg-mint-500 opacity-10 rounded-full animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -right-16 w-48 h-48 bg-mint-400 opacity-10 rounded-full animate-pulse-slow"></div>

      <motion.form
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto bg-brand-800 bg-opacity-60 backdrop-blur-md p-10 rounded-3xl shadow-lg"
      >
        <div className="flex items-center mb-6">
          <FaEnvelope className="text-mint-500 text-3xl mr-3" />
          <h3 className="text-2xl font-bold text-mint-500">Get in Touch</h3>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 rounded-xl bg-brand-900 text-neutral-100 border border-brand-700 focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-transparent transition"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-xl bg-brand-900 text-neutral-100 border border-brand-700 focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-transparent transition"
          />
          <textarea
            rows={5}
            placeholder="Message"
            className="w-full p-4 rounded-xl bg-brand-900 text-neutral-100 border border-brand-700 focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-transparent transition"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-mint-500 text-brand-900 px-6 py-3 rounded-xl font-semibold hover:bg-mint-400 transition shadow-md hover:shadow-lg"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  )
}
