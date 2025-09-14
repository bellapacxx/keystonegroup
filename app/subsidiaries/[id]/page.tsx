"use client"

import Link from "next/link"
import { subsidiaries } from "@/lib/data"
import { motion } from "framer-motion"
import { FaCogs, FaRocket, FaArrowLeft } from "react-icons/fa"

interface Props {
  params: { id: string }
}

export default function SubsidiaryDetailPage({ params }: Props) {
  const { id } = params
  const sub = subsidiaries.find((s) => s.id === id)

  if (!sub) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-neutral-100 px-4">
        <h2 className="text-3xl font-bold mb-4">Subsidiary Not Found</h2>
        <p className="mb-6 text-center">Please check the URL or return to the subsidiaries list.</p>
        <Link
          href="/subsidiaries"
          className="bg-mint-500 text-brand-900 px-6 py-3 rounded-lg hover:bg-mint-400 transition"
        >
          Back to Subsidiaries
        </Link>
      </div>
    )
  }

  return (
    <main className="bg-brand-700 min-h-screen py-16 px-6">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto mb-10 flex items-center gap-4 text-neutral-100">
        <Link
          href="/subsidiaries"
          className="flex items-center gap-2 text-mint-500 hover:underline"
        >
          <FaArrowLeft /> All Subsidiaries
        </Link>
        <span className="text-neutral-400">/</span>
        <span className="font-semibold">{sub.name}</span>
      </div>

      {/* Hero Section */}
      <section className="relative text-center mb-16">
        <motion.div
          className="absolute -top-16 -left-16 w-48 h-48 bg-gradient-to-br from-mint-500 to-blue-600 opacity-20 rounded-full blur-3xl animate-spin-slow"
          aria-hidden="true"
        />
        <motion.div
          className="absolute -bottom-20 -right-16 w-60 h-60 bg-gradient-to-br from-blue-400 to-mint-400 opacity-20 rounded-full blur-3xl animate-spin-slow"
          aria-hidden="true"
        />

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-mint-500 mb-4"
        >
          {sub.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-neutral-100 max-w-2xl mx-auto text-lg md:text-xl"
        >
          {sub.focus}
        </motion.p>
      </section>

      {/* Operations */}
      {(sub.operations || []).length > 0 && (
        <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {sub.operations?.map((op, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative flex items-start gap-4 bg-gradient-to-br from-brand-900/80 to-brand-800/60 backdrop-blur-md p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
            >
              <div className="text-mint-400 text-4xl mt-1">
                {i % 2 === 0 ? <FaCogs /> : <FaRocket />}
              </div>
              <p className="text-neutral-100 font-medium">{op}</p>
              <span className="absolute left-0 top-0 h-full w-1 rounded-l-full bg-gradient-to-b from-mint-500 to-mint-600"></span>
            </motion.div>
          ))}
        </section>
      )}
    </main>
  )
}
