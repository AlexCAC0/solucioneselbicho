import { motion } from 'framer-motion'

const ConstellationTimeline = () => {
  const events = [
    { year: '2020', title: 'Ignición', desc: 'Nace Soluciones el Bicho en un garaje digital.' },
    { year: '2022', title: 'Órbita', desc: 'Primeras 100 empresas locales digitalizadas.' },
    { year: '2024', title: 'Expansión', desc: 'Apertura del nodo central de IA avanzada.' },
    { year: '2026', title: 'Infinito', desc: 'Dominio total del mercado tecnológico regional.' }
  ]

  return (
    <section className="timeline">
      <h2 className="section-title">NUESTRA TRAYECTORIA</h2>
      <div className="constellation-container">
        {events.map((e, i) => (
          <motion.div 
            key={i}
            className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="timeline-point">
              <div className="point-glow"></div>
            </div>
            <div className="timeline-content service-card">
              <span className="year">{e.year}</span>
              <h3>{e.title}</h3>
              <p>{e.desc}</p>
            </div>
          </motion.div>
        ))}
        <div className="timeline-line"></div>
      </div>
    </section>
  )
}

export default ConstellationTimeline
