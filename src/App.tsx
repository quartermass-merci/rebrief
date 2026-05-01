import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Sponsorship from './pages/Sponsorship'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sponsorship" element={<Sponsorship />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
