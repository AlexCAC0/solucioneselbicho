import { motion } from 'framer-motion'

const HolographicTestimonials = () => {
  const testimonials = [
    { name: 'Dr. Nova', role: 'Ceo de AstroTech', text: 'El Bicho transformó nuestra infraestructura en una red neural imparable. Impresionante.' },
    { name: 'Comandante Ray', role: 'Logística Lunar', text: 'La velocidad de respuesta y el diseño futurista superaron todas nuestras expectativas.' },
    { name: 'Ing. Vega', role: 'Sistemas Estelares', text: 'Finalmente una solución que entiende el lenguaje del mañana. 10/10.' }
  ]

  return (
    <section className="testimonials">
      <h2 className="section-title">ECOS DEL UNIVERSO</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <motion.div 
            key={i}
            className="hologram-card"
            whileHover={{ y: -10, rotateY: 15 }}
            initial={{ opacity: 0, skewX: 20 }}
            whileInView={{ opacity: 1, skewX: 0 }}
          >
            <div className="glitch-effect"></div>
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-author">
              <strong>{t.name}</strong>
              <span>{t.role}</span>
            </div>
            <div className="hologram-scanline"></div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default HolographicTestimonials
