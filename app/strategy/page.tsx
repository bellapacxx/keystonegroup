import Achievements from "@/components/Achievements"
import FutureOutlook from "@/components/FutureOutlook"
import StrategicObjectives from "@/components/StrategicObjectives"
import {
  strategicObjectives,
  achievements,
  futureOutlook,
} from "@/lib/data"

export default function StrategyPage() {
  return (
    <main className="bg-brand-900 text-neutral-100 min-h-screen px-6 py-16">
      <div className="w-full mx-auto space-y-12">
        {/* Strategic Objectives */}
        <section>
         <StrategicObjectives/>
        </section>

        {/* Key Achievements */}
        <section className="w-full">
          <Achievements/>
        </section>

        {/* Future Outlook */}
        <section>
         <FutureOutlook/>
        </section>
      </div>
    </main>
  )
}
