import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import TrustBadges from "./components/TrustBadges"
import HowItWorks from "./components/HowItWorks"
import Guarantee from "./components/Guarantee"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import FinalCTA from "./components/FinalCTA"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#F5F5F5]">
      <Navigation />
      <Hero />
      <HowItWorks />
      <Guarantee />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}
