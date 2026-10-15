import HeroSection from '../components/HeroSection'
import MarqueeStrip from '../components/MarqueeStrip'
import IntroSection from '../components/IntroSection'
import ServicesSection from '../components/ServicesSection'
import SwapSection from '../components/SwapSection'
import GetStartedSection from '../components/GetStartedSection'
import SathiShareBanner from '../components/SathiShareBanner'
import PartnersStrip from '../components/PartnersStrip'

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <IntroSection />
      <ServicesSection />
      <SwapSection />
      <GetStartedSection />
      <SathiShareBanner />
      <PartnersStrip />
    </>
  )
}