import { motion } from 'framer-motion'

const Services = () => {
  const allServices = [
    { title: 'Desarrollo de Software', desc: 'Sistemas a medida programados con precisión quirúrgica.' },
    { title: 'Ciberseguridad', desc: 'Escudos de energía para proteger tus datos de cualquier intrusión.' },
    { title: 'Cloud Computing', desc: 'Tu infraestructura en la nube, accesible desde cualquier punto del universo.' },
    { title: 'Inteligencia Artificial', desc: 'Redes neuronales que aprenden y evolucionan con tu negocio.' },
    { title: 'Mantenimiento IT', desc: 'Soporte técnico constante para que tu nave nunca deje de volar.' },
    { title: 'Consultoría Tech', desc: 'Estrategias futuristas para dominar el mercado digital.' }
  ]

  return (
    <div className="page-content">
      <section className="hero-mini">
        <h1 className="futuristic-text">SISTEMAS AVANZADOS</h1>
        <p className="hero-subtitle">Nuestras soluciones tecnológicas de alto impacto.</p>
      </section>

      <div className="services-grid" style={{ marginBottom: '100px' }}>
        {allServices.map((s, i) => (
          <motion.div 
            key={i}
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Services
