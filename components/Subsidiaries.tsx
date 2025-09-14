"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { subsidiaries } from "@/lib/data"
import { FaBuilding } from "react-icons/fa"

export default function Subsidiaries() {
  return (
    <section className="relative py-16 px-6 bg-brand-700 overflow-hidden">
      {/* Floating shapes for depth */}
      <div className="absolute -top-20 -left-10 w-64 h-64 bg-mint-500 opacity-10 rounded-full animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -right-10 w-64 h-64 bg-mint-400 opacity-10 rounded-full animate-pulse-slow"></div>

      <h2 className="text-3xl font-bold text-mint-500 mb-12 text-center">
        Our Subsidiaries
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {subsidiaries.map((sub, i) => (
          <motion.div
            key={sub.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Link
              href={`/subsidiaries/${sub.id}`}
              className="relative group block bg-brand-900 bg-opacity-60 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform flex flex-col"
            >
              {/* Gradient border animation */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-mint-400 via-mint-500 to-mint-600 opacity-0 group-hover:opacity-50 transition duration-500 blur-xl"></div>

              {/* Content */}
              <div className="relative flex items-center mb-4">
                <FaBuilding className="text-mint-500 text-3xl mr-3" />
                <h3 className="text-xl font-semibold text-mint-500">{sub.name}</h3>
              </div>
              <p className="text-neutral-100 flex-1">{sub.focus}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
