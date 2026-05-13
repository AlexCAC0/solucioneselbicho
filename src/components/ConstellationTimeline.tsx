import { motion } from 'framer-motion'

const ConstellationTimeline = () => {
  const events = [
    { year: 'Objetivo 1', title: 'Fundación', desc: 'Establecer las bases de una consultora tecnológica sólida.' },
    { year: 'Objetivo 2', title: 'Crecimiento', desc: 'Digitalizar 100 empresas locales con soluciones modernas.' },
    { year: 'Objetivo 3', title: 'Innovación', desc: 'Implementar herramientas de automatización eficientes.' },
    { year: 'Objetivo 4', title: 'Liderazgo', desc: 'Convertirnos en referentes tecnológicos de la región.' }
  ]

  return (
    <section className="timeline">
      <h2 className="section-title">NUESTROS OBJETIVOS</h2>
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
