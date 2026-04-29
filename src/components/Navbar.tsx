import { Link } from 'react-router-dom'
import { motion, useScroll } from 'framer-motion'

const Navbar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <nav className="navbar">
      <motion.div 
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />
      <Link to="/" className="logo-link">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="logo"
        >
          Soluciones <span className="logo-bicho">EL BICHO</span>
        </motion.div>
      </Link>
      <ul className="nav-links">
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/showroom-3d">Showroom 3D</Link></li>
        <li><Link to="/mision">Misión</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contacto" className="nav-cta">Portal</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
