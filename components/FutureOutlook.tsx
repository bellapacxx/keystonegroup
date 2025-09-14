"use client"

import { motion } from "framer-motion"
import { futureOutlook } from "@/lib/data"
import { FaRegLightbulb } from "react-icons/fa"

export default function FutureOutlook() {
  return (
    <section className="relative py-16 px-6 bg-brand-800">
      <h2 className="text-3xl font-bold text-mint-500 mb-12 text-center">
        Future Outlook
      </h2>

      {/* Floating abstract shape */}
      <div className="absolute -top-16 -left-16 w-40 h-40 bg-mint-500 opacity-10 rounded-full animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -right-16 w-48 h-48 bg-mint-400 opacity-10 rounded-full animate-pulse-slow"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative bg-brand-800 bg-opacity-60 backdrop-blur-md p-10 rounded-3xl shadow-lg hover:shadow-2xl transition transform max-w-5xl mx-auto"
      >
        <div className="flex items-center mb-6">
          <FaRegLightbulb className="text-mint-500 text-3xl mr-3" />
          <h3 className="text-2xl font-bold text-mint-500">Looking Ahead</h3>
        </div>

        <p className="text-neutral-100 text-lg leading-relaxed">{futureOutlook}</p>

        <span className="block w-24 h-1 mt-6 rounded-full bg-gradient-to-r from-mint-400 to-mint-600 animate-pulse-slow"></span>
      </motion.div>
    </section>
  )
}
