'use client'
import Link from "next/link"
import { subsidiaries } from "@/lib/data"
import { motion } from "framer-motion"

export default function SubsidiariesPage() {
  return (
    <main className="bg-brand-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center bg-gradient-to-b from-brand-800 to-brand-700 overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-mint-500 opacity-10 rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -right-16 w-48 h-48 bg-mint-400 opacity-10 rounded-full animate-pulse-slow"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-mint-500 mb-4"
        >
          Our Subsidiaries
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-neutral-100 max-w-2xl mx-auto text-lg md:text-xl"
        >
          Keystone Group operates a diverse range of subsidiaries driving innovation across transportation, finance, media, logistics, and international trade.
        </motion.p>
      </section>

      {/* Subsidiaries Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {subsidiaries.map((sub, i) => (
          <motion.div
            key={sub.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-brand-900 p-6 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition transform cursor-pointer"
          >
            <Link href={`/subsidiaries/${sub.id}`} className="block">
              <h3 className="text-xl font-semibold text-mint-500 mb-2">{sub.name}</h3>
              <p className="text-neutral-100">{sub.focus}</p>
            </Link>
          </motion.div>
        ))}
      </section>
    </main>
  )
}
