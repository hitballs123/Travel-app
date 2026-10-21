import { useEffect } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router'
import { Footer } from './components/Footer'
import { NotFound } from './components/NotFound'
import { ExperienceScreen } from './screens/ExperienceScreen'
import { FinishScreen } from './screens/FinishScreen'
import { HomeScreen } from './screens/HomeScreen'
import { StopScreen } from './screens/StopScreen'

// HashRouter so deep links work on GitHub Pages without server rewrites.
export function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/e/:id" element={<ExperienceScreen />} />
        <Route path="/e/:id/stop/:n" element={<StopScreen />} />
        <Route path="/e/:id/done" element={<FinishScreen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}
