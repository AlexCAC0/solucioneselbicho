import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className="page-content">
      <section className="hero-mini">
        <h1>CONTACTO</h1>
        <p className="hero-subtitle">Estamos aquí para ayudarte con tus proyectos.</p>
      </section>

      <motion.section 
        className="contact-container"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="service-card contact-form">
          <div className="form-group">
            <label>NOMBRE COMPLETO</label>
            <input type="text" placeholder="Tu nombre..." className="space-input" />
          </div>
          <div className="form-group">
            <label>CORREO ELECTRÓNICO</label>
            <input type="email" placeholder="tu@email.com" className="space-input" />
          </div>
          <div className="form-group">
            <label>MENSAJE</label>
            <textarea placeholder="Escribe tu mensaje..." className="space-input" rows={5}></textarea>
          </div>
          <button className="btn-space">ENVIAR MENSAJE</button>
        </div>
      </motion.section>
    </div>
  )
}

export default Contact
