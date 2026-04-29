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
          <h2 style={{ color: 'var(--violet-accent)', marginBottom: '30px' }}>VISIÓN 2030</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '2' }}>
            "En Soluciones el Bicho, nuestra misión es democratizar el acceso a la tecnología de vanguardia. 
            Creemos en un futuro donde cada negocio, sin importar su tamaño, tenga el poder de una supercomputadora 
            en la palma de su mano. Estamos aquí para construir los puentes digitales hacia esa realidad."
          </p>
          <div className="card-glow" style={{ opacity: 0.3 }}></div>
        </div>
      </motion.section>
    </div>
  )
}

export default Mission
