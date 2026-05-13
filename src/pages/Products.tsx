import { motion } from 'framer-motion'

const Products = () => {
  const products = [
    { name: 'BichoCore System', status: 'Esperando stock', desc: 'Nuestro sistema central de gestión optimizada.' },
    { name: 'Servidor Pro', status: 'Esperando stock', desc: 'Hardware de alto rendimiento para aplicaciones exigentes.' },
    { name: 'Kit de Diseño', status: 'Esperando stock', desc: 'Paquete completo de componentes para interfaces modernas.' }
  ]

  return (
    <div className="page-content">
      <section className="hero-mini">
        <h1>PRODUCTOS</h1>
        <p className="hero-subtitle">Catálogo de soluciones tecnológicas.</p>
      </section>

      <div className="services-grid" style={{ marginBottom: '100px' }}>
        {products.map((p, i) => (
          <motion.div 
            key={i}
            className="service-card"
            whileHover={{ y: -10 }}
          >
            <div className="badge" style={{ backgroundColor: '#444' }}>{p.status}</div>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <button className="btn-glass" disabled style={{ marginTop: '20px', width: '100%', opacity: 0.5, cursor: 'not-allowed' }}>No disponible</button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Products
