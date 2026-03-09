import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import MiraPage from './pages/MiraPage'

function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-200 font-sans">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="mira" element={<MiraPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
