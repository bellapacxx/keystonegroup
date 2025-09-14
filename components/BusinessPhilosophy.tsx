"use client"

import { motion } from "framer-motion"
import { businessPhilosophy } from "@/lib/data"
import { FaLightbulb } from "react-icons/fa"

export default function BusinessPhilosophy() {
  return (
    <div className="relative max-w-4xl mx-auto py-16 px-6">
      {/* Triangle background with blur and pulse */}
      <svg
        className="absolute -top-16 -right-16 w-64 h-64 opacity-20 animate-pulse-slow"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="triangleClip">
            <polygon points="100,0 0,200 200,200" />
          </clipPath>
          <linearGradient id="triangleGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3ee0c3" />
            <stop offset="100%" stopColor="#0088ff" />
          </linearGradient>
          <filter id="blurFilter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="30" />
          </filter>
        </defs>

        <polygon
          points="100,0 0,200 200,200"
          fill="url(#triangleGradient)"
          clipPath="url(#triangleClip)"
          filter="url(#blurFilter)"
        />
      </svg>

      {/* Glassmorphism card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative bg-brand-800 bg-opacity-60 backdrop-blur-md p-10 rounded-3xl shadow-lg hover:shadow-2xl transition transform"
      >
        <div className="flex items-center mb-6">
          <FaLightbulb className="text-mint-500 text-3xl mr-3" />
          <h2 className="text-3xl font-bold text-mint-500">Our Philosophy</h2>
        </div>
        <p className="text-neutral-100 text-lg leading-relaxed">{businessPhilosophy}</p>
        <span className="block w-24 h-1 mt-6 rounded-full bg-gradient-to-r from-mint-400 to-mint-600 animate-pulse-slow"></span>
      </motion.div>
    </div>
  )
}
