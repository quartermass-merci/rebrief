import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import DevOverlay from './DevOverlay'

export default function Layout() {
  return (
    <div className="flex flex-col relative">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {import.meta.env.DEV && <DevOverlay />}
    </div>
  )
}
