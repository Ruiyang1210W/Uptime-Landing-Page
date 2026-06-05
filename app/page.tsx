import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import BannerShowcase from '@/components/sections/BannerShowcase'
import Problem from '@/components/sections/Problem'
import HowItWorks from '@/components/sections/HowItWorks'
import Features from '@/components/sections/Features'
import SocialProof from '@/components/sections/SocialProof'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <BannerShowcase />
      <Problem />
      <HowItWorks />
      <Features />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </main>
  )
}
