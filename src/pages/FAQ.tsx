import { motion } from 'framer-motion'

const FAQ = () => {
  const faqs = [
    { q: '¿Qué servicios ofrecen exactamente?', a: 'Ofrecemos desarrollo de sitios web personalizados, diseño de interfaces y consultoría en optimización de procesos digitales.' },
    { q: '¿Cómo puedo contactar con soporte?', a: 'Puedes contactarnos a través de nuestra sección de contacto o enviándonos un correo directamente.' },
    { q: '¿Sus soluciones son escalables?', a: 'Sí, diseñamos nuestros sistemas para que puedan crecer y adaptarse a las necesidades de tu negocio a largo plazo.' },
    { q: '¿Trabajan de forma remota?', a: 'Sí, trabajamos de forma remota para ofrecer nuestros servicios a clientes de cualquier ubicación.' }
  ]

  return (
    <div className="page-content">
      <section className="hero-mini">
        <h1>PREGUNTAS FRECUENTES</h1>
        <p className="hero-subtitle">Resolvemos tus dudas principales.</p>
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
