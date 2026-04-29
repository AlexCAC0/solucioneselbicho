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
        <p className="hero-subtitle">Nuestra historia en la vanguardia digital.</p>
      </motion.section>

      <ConstellationTimeline />

      <section className="info-grid">
        <motion.div 
          className="service-card"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <h3>Quiénes Somos</h3>
          <p>Somos un colectivo de ingenieros y diseñadores apasionados por la tecnología del mañana. En Soluciones el Bicho, no solo arreglamos sistemas, los reinventamos.</p>
        </motion.div>

        <motion.div 
          className="service-card"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <h3>Nuestra Misión</h3>
          <p>Acelerar la transición digital de los negocios locales hacia estándares globales de eficiencia y diseño galáctico.</p>
        </motion.div>
      </section>
    </div>
  )
}

export default About
