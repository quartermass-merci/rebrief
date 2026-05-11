import { Routes, Route } from 'react-router-dom'
import ResponsiveHome from './pages/ResponsiveHome'
import HomeMobile from './pages/HomeMobile'

export default function App() {
  return (
    <Routes>
      {/* Root route: desktop >= 768px, mobile <= 767px */}
      <Route index element={<ResponsiveHome />} />
      {/* Dev/QA-only route for direct mobile testing */}
      <Route path="/mobile" element={<HomeMobile />} />
    </Routes>
  )
}
