import { motion } from 'framer-motion'

const Services = () => {
  const allServices = [
    { title: 'Desarrollo de Software', desc: 'Sistemas a medida desarrollados con los más altos estándares de calidad.' },
    { title: 'Seguridad Digital', desc: 'Protección integral para tus datos y sistemas contra amenazas externas.' },
    { title: 'Servicios Cloud', desc: 'Infraestructura en la nube moderna y escalable para tu negocio.' },
    { title: 'Automatización', desc: 'Optimización de procesos mediante herramientas digitales inteligentes.' },
    { title: 'Mantenimiento IT', desc: 'Soporte técnico continuo para asegurar el funcionamiento de tus sistemas.' },
    { title: 'Consultoría Tech', desc: 'Asesoramiento estratégico para potenciar tu presencia y eficiencia digital.' }
  ]

  return (
    <div className="page-content">
      <section className="hero-mini">
        <h1>NUESTROS SERVICIOS</h1>
        <p className="hero-subtitle">Soluciones tecnológicas adaptadas a tus necesidades.</p>
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
