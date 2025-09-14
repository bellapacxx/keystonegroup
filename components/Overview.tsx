import { companyOverview } from "@/lib/data"

export default function Overview() {
  return (
    <div className="max-w-5xl mx-auto space-y-2 text-neutral-100">
      {Object.entries(companyOverview).map(([key, value]) => {
        if (typeof value === "object") return null
        return (
          <p key={key}>
            <span className="font-semibold">{key.replace(/([A-Z])/g, ' $1')}:</span> {value}
          </p>
        )
      })}
    </div>
  )
}
