import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Help from '../pages/Help'
import Legal from '../pages/Legal'
import Blog from '../pages/Blog'
import Support from '../pages/Support'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/support" element={<Support />} />
      </Route>
    </Routes>
  )
}