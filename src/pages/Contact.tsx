import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className="page-content">
      <section className="hero-mini">
        <h1 className="futuristic-text">PORTAL DE ENLACE</h1>
        <p className="hero-subtitle">Conecta con el núcleo de operaciones.</p>
      </section>

      <motion.section 
        className="contact-container"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="service-card contact-form">
          <div className="form-group">
            <label>IDENTIFICACIÓN</label>
            <input type="text" placeholder="Tu nombre..." className="space-input" />
          </div>
          <div className="form-group">
            <label>COORDENADAS (EMAIL)</label>
            <input type="email" placeholder="email@galaxia.com" className="space-input" />
          </div>
          <div className="form-group">
            <label>MENSAJE DE TRANSMISIÓN</label>
            <textarea placeholder="Escribe tu mensaje..." className="space-input" rows={5}></textarea>
          </div>
          <button className="btn-space">ENVIAR TRANSMISIÓN</button>
        </div>
      </motion.section>
    </div>
  )
}

export default Contact
