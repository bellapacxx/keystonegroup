"use client"

import { motion } from "framer-motion"
import { strategicObjectives } from "@/lib/data"
import { FaBullseye } from "react-icons/fa"

export default function StrategicObjectives() {
  return (
    <section className="py-16 px-6 bg-brand-800">
      <h2 className="text-3xl font-bold text-mint-500 mb-12 text-center">
        Strategic Objectives
      </h2>

      <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
        {strategicObjectives.map((obj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative flex items-start gap-4 bg-brand-900 bg-opacity-60 backdrop-blur-md p-5 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform"
          >
            <div className="text-mint-500 text-2xl mt-1">
              <FaBullseye />
            </div>
            <p className="text-neutral-100 font-medium">{obj}</p>
            {/* Gradient left accent */}
            <span className="absolute left-0 top-0 h-full w-1 rounded-l-full bg-gradient-to-b from-mint-400 to-mint-600"></span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
