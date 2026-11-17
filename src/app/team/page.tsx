import { BusinessContact } from "@/components/sections/BusinessContact/BusinessContact"
import { ContactSection } from "@/components/sections/Contact"
import { DiscoveryBanner } from "@/components/sections/DiscoveryBanner/DiscoveryBanner"
import DuotoneTeamRoster from "@/components/Team/OurTeam"

export default function DuotoneTeamRosterDemo() {
  return (
    <div className="w-full">
      <DuotoneTeamRoster />
      <BusinessContact />
      <ContactSection />.
      <DiscoveryBanner />
    </div>
  )
}
