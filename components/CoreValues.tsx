"use client"

import { motion } from "framer-motion"
import { coreValues } from "@/lib/data"
import { FaLightbulb, FaHandshake, FaRecycle, FaStar, FaUserCheck, FaUsers, FaBalanceScale, FaSyncAlt, FaClock } from "react-icons/fa"

const icons = [
  <FaBalanceScale />,  // Integrity
  <FaLightbulb />,     // Innovation
  <FaUserCheck />,     // Customer-Centricity
  <FaHandshake />,     // Collaboration
  <FaStar />,          // Excellence
  <FaRecycle />,       // Sustainability
  <FaSyncAlt />,       // Accountability
  <FaUsers />,         // Respect
  <FaClock />,         // Adaptability
  <FaClock />          // Long-Term Perspective
]

export default function CoreValues() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {coreValues.map((value, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="relative group rounded-2xl cursor-default p-6 bg-brand-800 bg-opacity-60 backdrop-blur-md shadow-lg hover:shadow-2xl transition transform"
        >
          {/* Animated gradient border */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-mint-400 via-mint-500 to-mint-600 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>

          {/* Content */}
          <div className="relative flex items-start space-x-4">
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="text-mint-500 text-3xl"
            >
              {icons[i]}
            </motion.div>
            <p className="text-neutral-100 font-medium">{value}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
