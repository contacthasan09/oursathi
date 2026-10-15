import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PortalPanel from '../components/PortalPanel'
import ScrollProgress from '../components/ScrollProgress'
import { useScrollToHash } from '../hooks/useScrollToHash'

export default function MainLayout() {
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  useScrollToHash()   // 👈 ADD THIS

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header onOpenPanel={() => setIsPanelOpen(true)} />
      <PortalPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}