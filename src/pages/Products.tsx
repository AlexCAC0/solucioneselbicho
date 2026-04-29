import { motion } from 'framer-motion'

const Products = () => {
  const products = [
    { name: 'BichoCore AI', price: 'V2.0', desc: 'Núcleo de procesamiento inteligente para automatización total.' },
    { name: 'Nebula Server', price: 'Enterprise', desc: 'Servidores de alto rendimiento con refrigeración criogénica virtual.' },
    { name: 'Galaxy UI Kit', price: 'Design', desc: 'Librería de componentes futuristas para interfaces de usuario.' }
  ]

  return (
    <div className="page-content">
      <section className="hero-mini">
        <h1 className="futuristic-text">CATÁLOGO GALÁCTICO</h1>
        <p className="hero-subtitle">Productos diseñados para el siglo XXII.</p>
      </section>

      <div className="services-grid" style={{ marginBottom: '100px' }}>
        {products.map((p, i) => (
          <motion.div 
            key={i}
            className="service-card"
            whileHover={{ y: -10 }}
          >
            <div className="badge">{p.price}</div>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <button className="btn-glass" style={{ marginTop: '20px', width: '100%' }}>Adquirir</button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Products
