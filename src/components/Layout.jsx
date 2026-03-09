import { Outlet } from 'react-router-dom'
import { ContactModalProvider } from '../context/ContactModalContext'
import ContactModal from './ContactModal'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <ContactModalProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ContactModal />
    </ContactModalProvider>
  )
}
