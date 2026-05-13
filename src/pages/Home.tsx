import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import HolographicTestimonials from '../components/HolographicTestimonials'

const Home = () => {
  const { scrollY } = useScroll();
  
  const heroTextY = useTransform(scrollY, [0, 500], [0, -150]);
  const heroSubtitleY = useTransform(scrollY, [0, 500], [0, -100]);
  const heroButtonsY = useTransform(scrollY, [0, 500], [0, -50]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  const services = [
    { title: 'Desarrollo Web', description: 'Creamos sitios web modernos y optimizados para potenciar tu presencia digital.' },
    { title: 'Diseño UI/UX', description: 'Interfaces intuitivas y atractivas diseñadas para mejorar la experiencia del usuario.' },
    { title: 'Sistemas Digitales', description: 'Consultoría y soluciones tecnológicas para optimizar los procesos de tu negocio.' }
  ]

  return (
    <main>
      <section className="hero">
        <motion.div style={{ y: heroTextY, opacity: opacityHero }}>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Tecnología al <br />
            <span className="futuristic-text">ALCANCE</span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            style={{ y: heroSubtitleY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Soluciones innovadoras diseñadas para llevar tu negocio al siguiente nivel digital.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            style={{ y: heroButtonsY }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="/servicios">
              <button className="btn-space">Ver Servicios</button>
            </Link>
            <Link to="/productos">
              <button className="btn-glass">Ver Productos</button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="services">
        <motion.h2 
          initial={{ opacity: 0, letterSpacing: "10px" }}
          whileInView={{ opacity: 1, letterSpacing: "2px" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="section-title"
        >
          NUESTRAS SOLUCIONES
        </motion.h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              whileHover={{ 
                scale: 1.05, 
                rotateX: 10,
                rotateY: -10,
                boxShadow: "0px 0px 30px rgba(139, 92, 246, 0.6)" 
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="card-glow"></div>
            </motion.div>
          ))}
        </div>
      </section>

      <HolographicTestimonials />
    </main>
  )
}

export default Home
