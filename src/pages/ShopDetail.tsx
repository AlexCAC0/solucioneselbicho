import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'

interface ShopInfo {
  name: string;
  icon: string;
  desc: string;
  inventory: string[];
}

const ShopDetail = () => {
  const { shopId } = useParams();

  const shopData: Record<string, ShopInfo> = {
    'rep': {
      name: 'CENTRO DE REPARACIÓN',
      icon: '🔧',
      desc: 'Expertos en reparación de hardware y diagnósticos avanzados para todo tipo de equipos.',
      inventory: ['Reparación de Placas Base', 'Recuperación de Datos', 'Limpieza Técnica', 'Mantenimiento de GPU']
    },
    'per': {
      name: 'ZONA DE PERIFÉRICOS',
      icon: '⌨️',
      desc: 'El equipamiento que todo profesional y entusiasta necesita para su estación de trabajo.',
      inventory: ['Teclados Mecánicos', 'Ratones de Precisión', 'Monitores Profesionales', 'Auriculares de Alta Fidelidad']
    },
    'rest': {
      name: 'ESPACIO COWORKING',
      icon: '☕',
      desc: 'Un lugar de descanso y trabajo para profesionales. Conexión de alta velocidad y ambiente tranquilo.',
      inventory: ['Servicio de Café', 'Snacks', 'Estaciones de Trabajo', 'Zona de Reuniones']
    },
    'rent': {
      name: 'ALQUILER DE EQUIPOS',
      icon: '💻',
      desc: '¿Necesitas potencia temporal? Alquila nuestras estaciones de trabajo de alto rendimiento.',
      inventory: ['Workstations de Diseño', 'Servidores Temporales', 'Equipos para Eventos', 'Laptops Profesionales']
    },
    'sale': {
      name: 'VENTA DE COMPUTADORAS',
      icon: '💎',
      desc: 'Nuestros equipos personalizados diseñados para ofrecer el mejor rendimiento y durabilidad.',
      inventory: ['Equipos de Oficina', 'Sistemas de Alto Rendimiento', 'Workstations Profesionales', 'Equipos a Medida']
    },
    'lab': {
      name: 'DESARROLLO Y CONSULTORÍA',
      icon: '💻',
      desc: 'Donde las ideas se convierten en soluciones. Consultoría tecnológica y desarrollo a medida.',
      inventory: ['Desarrollo de Software', 'Automatización de Procesos', 'Integración de Sistemas', 'Análisis de Datos']
    }
  };

  const shop = shopData[shopId as string] || shopData['rep'];

  return (
    <div className="page-content shop-detail-page">
      <Link to="/showroom-3d" className="btn-glass" style={{ marginBottom: '30px', display: 'inline-block' }}>
        ← VOLVER AL SHOWROOM
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
              <p>Disponible para solicitud inmediata.</p>
              <button className="btn-space" style={{ marginTop: '15px', padding: '8px 20px', fontSize: '0.7rem' }}>SOLICITAR</button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ShopDetail
