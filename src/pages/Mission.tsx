import { motion } from 'framer-motion'

const Mission = () => {
  return (
    <div className="page-content">
      <section className="hero-mini">
        <h1 className="futuristic-text">NUESTRA MISIÓN</h1>
        <p className="hero-subtitle">El propósito que guía nuestro viaje.</p>
      </section>

      <motion.section 
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="service-card" style={{ textAlign: 'center', padding: '60px' }}>
          <h2 style={{ color: 'var(--violet-accent)', marginBottom: '30px' }}>VISIÓN Y OBJETIVO</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '2' }}>
            "En Soluciones el Bicho, nuestro objetivo es facilitar el acceso a herramientas tecnológicas modernas. 
            Creemos que cada negocio puede mejorar su rendimiento mediante la implementación de soluciones digitales
            prácticas y bien diseñadas. Estamos aquí para acompañarte en ese proceso."
          </p>
          <div className="card-glow" style={{ opacity: 0.3 }}></div>
        </div>
      </motion.section>
    </div>
  )
}

export default Mission
