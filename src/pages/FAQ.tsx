import { motion } from 'framer-motion'

const FAQ = () => {
  const faqs = [
    { q: '¿Qué servicios ofrecen exactamente?', a: 'Desde desarrollo web hasta inteligencia artificial avanzada y soporte técnico IT.' },
    { q: '¿Cómo puedo contactar con soporte?', a: 'A través de nuestro portal de enlace (sección Contacto) o vía telepatía digital (próximamente).' },
    { q: '¿Sus soluciones son escalables?', a: 'Nuestros sistemas están diseñados para crecer a la velocidad de la luz junto con tu negocio.' },
    { q: '¿Trabajan de forma remota?', a: 'Operamos desde cualquier punto de la galaxia con conexión a la red.' }
  ]

  return (
    <div className="page-content">
      <section className="hero-mini">
        <h1 className="futuristic-text">PREGUNTAS FRECUENTES</h1>
        <p className="hero-subtitle">Protocolos de ayuda y resolución de dudas.</p>
      </section>

      <div className="contact-container">
        {faqs.map((faq, i) => (
          <motion.div 
            key={i}
            className="service-card"
            style={{ marginBottom: '20px', textAlign: 'left' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <h4 style={{ color: 'var(--violet-accent)', marginBottom: '10px' }}>{faq.q}</h4>
            <p style={{ margin: 0 }}>{faq.a}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
