"use client"

import { motion } from "framer-motion"
import { FaBuilding, FaGavel, FaCalendarAlt, FaGlobe, FaMapMarkerAlt, FaIndustry, FaLink, FaPhone, FaEnvelope } from "react-icons/fa"
import { companyOverview } from "@/lib/data"

const overviewFields = [
  { label: "Name", value: companyOverview.name, icon: <FaBuilding /> },
  { label: "Legal Status", value: companyOverview.legalStatus, icon: <FaGavel /> },
  { label: "Established", value: companyOverview.established, icon: <FaCalendarAlt /> },
  { label: "Jurisdiction", value: companyOverview.jurisdiction, icon: <FaGlobe /> },
  { label: "Headquarters", value: companyOverview.headquarters, icon: <FaMapMarkerAlt /> },
  { label: "Industry", value: companyOverview.industry, icon: <FaIndustry /> },
  { label: "Website", value: <a href={companyOverview.website} className="text-mint-400 hover:underline">{companyOverview.website}</a>, icon: <FaLink /> },
  { label: "Address", value: companyOverview.contact.address, icon: <FaMapMarkerAlt /> },
  { label: "Phone", value: companyOverview.contact.phone, icon: <FaPhone /> },
  { label: "Email", value: companyOverview.contact.email, icon: <FaEnvelope /> },
]

export default function CompanyOverview() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {overviewFields.map((field, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="flex items-start gap-4 bg-brand-800/70 backdrop-blur-md p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform relative overflow-hidden"
        >
          <div className="text-mint-400 text-3xl mt-1">{field.icon}</div>
          <div>
            <span className="font-semibold text-mint-400">{field.label}:</span>{" "}
            <span className="text-neutral-100">{field.value}</span>
          </div>
          {/* Optional decorative gradient line */}
          <span className="absolute left-0 top-0 h-full w-1 rounded-l-full bg-gradient-to-b from-mint-400 to-mint-600"></span>
        </motion.div>
      ))}
    </div>
  )
}
