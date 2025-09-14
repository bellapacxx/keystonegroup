"use client"

import { motion } from "framer-motion"
import { vision, mission } from "@/lib/data"
import { FaEye, FaBullseye } from "react-icons/fa"

export default function VisionMission() {
  return (
    <div className="relative max-w-6xl mx-auto py-16 px-6">
      {/* Floating SVG shapes */}
      <svg
        className="absolute -top-16 -left-16 w-64 h-64 opacity-20 animate-pulse-slow"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="100" fill="url(#gradient1)" />
        <defs>
          <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3ee0c3" />
            <stop offset="100%" stopColor="#0088ff" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="absolute -bottom-16 -right-16 w-64 h-64 opacity-20 animate-pulse-slow delay-2000"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="100" fill="url(#gradient2)" />
        <defs>
          <linearGradient id="gradient2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff7eb3" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>

      {/* Cards Container */}
      <div className="grid md:grid-cols-2 gap-10 relative z-10">
        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative bg-brand-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
        >
          <div className="flex items-center mb-4">
            <FaEye className="text-mint-500 text-3xl mr-3" />
            <h2 className="text-3xl font-bold text-mint-500">Vision</h2>
          </div>
          <p className="text-neutral-100 leading-relaxed">{vision}</p>
          <span className="block w-20 h-1 mt-6 rounded-full bg-gradient-to-r from-mint-400 to-mint-600 animate-pulse-slow"></span>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-brand-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
        >
          <div className="flex items-center mb-4">
            <FaBullseye className="text-mint-500 text-3xl mr-3" />
            <h2 className="text-3xl font-bold text-mint-500">Mission</h2>
          </div>
          <p className="text-neutral-100 leading-relaxed">{mission}</p>
          <span className="block w-20 h-1 mt-6 rounded-full bg-gradient-to-r from-mint-400 to-mint-600 animate-pulse-slow"></span>
        </motion.div>
      </div>
    </div>
  )
}
