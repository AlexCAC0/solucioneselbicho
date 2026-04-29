import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'

const ShopDetail = () => {
  const { shopId } = useParams();

  const shopData: Record<string, any> = {
    'rep': {
      name: 'NÚCLEO DE REPARACIÓN',
      icon: '🔧',
      desc: 'Expertos en revivir hardware que otros dieron por muerto. Usamos soldadura láser y diagnósticos cuánticos.',
      inventory: ['Reparación de Placas Base', 'Recuperación de Datos', 'Limpieza Ultrasonido', 'Reballing de GPU']
    },
    'per': {
      name: 'ZONA PERIFÉRICA',
      icon: '⌨️',
      desc: 'El arsenal que todo gamer y profesional necesita. Si brilla y es rápido, lo tenemos.',
      inventory: ['Teclados Mecánicos Custom', 'Ratones de Precisión', 'Monitores 400Hz', 'Auriculares Espaciales']
    },
    'rest': {
      name: 'CIBER CAFÉ NEBULA',
      icon: '☕',
      desc: 'El lugar de descanso para nómadas digitales. Conexión de 10Gbps y el mejor café de la galaxia.',
      inventory: ['Café Estelar', 'Bebidas Energéticas', 'Estaciones de Trabajo', 'Zona de Gaming VR']
    },
    'rent': {
      name: 'ALQUILER DE NAVES',
      icon: '🚀',
      desc: '¿Necesitas potencia para un proyecto pesado? Alquila nuestras estaciones de trabajo de alto rendimiento.',
      inventory: ['Workstations RTX 4090', 'Servidores de Renderizado', 'PCs para Torneos', 'Laptops de Gama Alta']
    },
    'sale': {
      name: 'VENTA DE SUPERCOMPUTADORAS',
      icon: '💎',
      desc: 'Nuestras máquinas personalizadas "Bicho-Edition". Construidas para durar e impresionar.',
      inventory: ['Edición Limitada Bicho v2', 'Sistemas de Refrigeración Líquida', 'Workstations Profesionales', 'Equipos Gaming a Medida']
    },
    'lab': {
      name: 'CENTRO DE IA',
      icon: '🧠',
      desc: 'Donde el software cobra vida. Consultoría y entrenamiento de modelos de inteligencia artificial.',
      inventory: ['Entrenamiento de Modelos', 'Automatización de Procesos', 'Integración de LLMs', 'Análisis de Datos Masivos']
    }
  };

  const shop = shopData[shopId as string] || shopData['rep'];

  return (
    <div className="page-content shop-detail-page">
      <Link to="/showroom-3d" className="btn-glass" style={{ marginBottom: '30px', display: 'inline-block' }}>
        ← VOLVER AL MALL
      </Link>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="shop-header"
      >
        <div className="shop-icon-large">{shop.icon}</div>
        <div>
          <h1 className="futuristic-text">{shop.name}</h1>
          <p className="hero-subtitle" style={{ margin: 0 }}>{shop.desc}</p>
        </div>
      </motion.div>

      <section>
        <h2 className="section-title" style={{ textAlign: 'left', fontSize: '1.5rem' }}>SERVICIOS & PRODUCTOS DISPONIBLES</h2>
        <div className="shop-inventory">
          {shop.inventory.map((item: string, i: number) => (
            <motion.div 
              key={i}
              className="inventory-item"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <h4>{item}</h4>
              <p>Disponible para despliegue inmediato.</p>
              <button className="btn-space" style={{ marginTop: '15px', padding: '8px 20px', fontSize: '0.7rem' }}>SOLICITAR</button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ShopDetail
