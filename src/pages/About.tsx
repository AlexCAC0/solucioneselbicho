import { motion } from 'framer-motion'
import ConstellationTimeline from '../components/ConstellationTimeline'

const About = () => {
  return (
    <div className="page-content">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="hero-mini"
      >
        <h1 className="futuristic-text">EL BICHO</h1>
        <p className="hero-subtitle">Conoce nuestra historia y compromiso con la tecnología.</p>
      </motion.section>

      <ConstellationTimeline />

      <section className="info-grid">
        <motion.div 
          className="service-card"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <h3>Quiénes Somos</h3>
          <p>Somos un equipo de profesionales apasionados por brindar soluciones tecnológicas eficientes. En Soluciones el Bicho, nos enfocamos en optimizar tus sistemas para que puedas centrarte en lo que importa.</p>
        </motion.div>

        <motion.div 
          className="service-card"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <h3>Nuestra Visión</h3>
          <p>Facilitar la evolución tecnológica de las empresas locales, aplicando estándares modernos de eficiencia y diseño funcional.</p>
        </motion.div>
      </section>
    </div>
  )
}

export default About
