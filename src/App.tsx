import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GalaxyBackground from './components/GalaxyBackground'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Products from './pages/Products'
import Mission from './pages/Mission'
import FAQ from './pages/FAQ'
import Shopping3D from './pages/Shopping3D'
import ShopDetail from './pages/ShopDetail'
import PageTransition from './components/PageTransition'
import LoadingScreen from './components/LoadingScreen'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <LoadingScreen />
        <GalaxyBackground />
        <Navbar />
        
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/showroom-3d" element={<Shopping3D />} />
            <Route path="/tienda/:shopId" element={<ShopDetail />} />
            <Route path="/mision" element={<Mission />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </PageTransition>

        <footer className="footer">
          <p>CONECTADO AL NÚCLEO &copy; 2026 SOLUCIONES EL BICHO</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
