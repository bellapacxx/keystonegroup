// app/page.tsx
import Hero from '../components/Hero'
import Overview from '../components/Overview'
import VisionMission from '../components/VisionMission'
import CoreValues from '../components/CoreValues'
import BusinessPhilosophy from '../components/BusinessPhilosophy'
import Subsidiaries from '../components/Subsidiaries'
import StrategicObjectives from '../components/StrategicObjectives'
import Achievements from '../components/Achievements'
import FutureOutlook from '../components/FutureOutlook'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
          <VisionMission />
      <CoreValues />
      <BusinessPhilosophy />
      <Subsidiaries />
      <StrategicObjectives />
      <Achievements />
      <FutureOutlook />
      <Contact />
    </>
  )
}
