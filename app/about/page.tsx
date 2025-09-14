"use client"

import BusinessPhilosophy from "@/components/BusinessPhilosophy"
import CoreValues from "@/components/CoreValues"
import VisionMission from "@/components/VisionMission"
import CompanyOverview from "@/components/CompanyOverview"

export default function AboutPage() {
  return (
    <main className="bg-brand-900 text-neutral-100 min-h-screen px-6 py-16 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-mint-500/20 rounded-full blur-3xl -z-10 animate-spin-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10 animate-spin-slow"></div>
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-mint-400/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>

      <div className="max-w-6xl mx-auto space-y-20 mt-20">
        {/* Company Overview */}
        <section className="relative mt-20">
          <h1 className="text-4xl md:text-5xl font-bold text-mint-500 mb-8 text-center">
            Company Overview
          </h1>
          <CompanyOverview />
        </section>

        {/* Vision & Mission */}
        <section className="relative">
          <VisionMission />
        </section>

        {/* Core Values */}
        <section className="relative">
          <CoreValues />
        </section>

        {/* Business Philosophy */}
        <section className="relative bg-brand-800 mt-20">
          <BusinessPhilosophy />
        </section>
      </div>
    </main>
  )
}
