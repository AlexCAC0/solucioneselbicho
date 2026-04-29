import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Shopping3D = () => {
  const [activeFloor, setActiveFloor] = useState(1);
  const navigate = useNavigate();

  const floor1Shops = [
    { id: 'rep', name: 'NÚCLEO DE REPARACIÓN', desc: 'Laboratorios criogénicos para hardware dañado.', icon: '🔧' },
    { id: 'per', name: 'ZONA PERIFÉRICA', desc: 'Interfaces neuronales y periféricos de plasma.', icon: '⌨️' },
    { id: 'rest', name: 'CIBER CAFÉ NEBULA', desc: 'Recarga tus bio-baterías con café estelar.', icon: '☕' }
  ];

  const floor2Shops = [
    { id: 'rent', name: 'ALQUILER DE NAVES', desc: 'Renta potencia bruta por ciclos solares.', icon: '🚀' },
    { id: 'sale', name: 'VENTA DE SUPERCOMPUTADORAS', desc: 'Adquiere tu propio núcleo cuántico.', icon: '💎' },
    { id: 'lab', name: 'CENTRO DE IA', desc: 'Entrena tus propios modelos de lenguaje.', icon: '🧠' }
  ];

  const shops = activeFloor === 1 ? floor1Shops : floor2Shops;

  return (
    <div className="page-content shopping-3d-page">
      <section className="hero-mini">
        <h1 className="futuristic-text">CENTRO TECNOLÓGICO</h1>
        <p className="hero-subtitle">Navega por los niveles y entra en las estaciones de servicio.</p>
      </section>

      <div className="floor-selector">
        <button 
          className={activeFloor === 1 ? 'btn-space active' : 'btn-glass'}
          onClick={() => setActiveFloor(1)}
        >
          NIVEL 01: HARDWARE
        </button>
        <button 
          className={activeFloor === 2 ? 'btn-space active' : 'btn-glass'}
          onClick={() => setActiveFloor(2)}
        >
          NIVEL 02: SISTEMAS
        </button>
      </div>

      <div className="mall-perspective">
        <motion.div 
          className="mall-structure"
          key={activeFloor}
          initial={{ rotateX: 60, rotateZ: -10, y: 100, opacity: 0 }}
          animate={{ rotateX: 20, rotateZ: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="mall-floor">
            <div className="grid-lines"></div>
            
            {shops.map((shop, i) => (
              <motion.div 
                key={shop.id}
                className={`shop-building shop-${i+1}`}
                whileHover={{ translateZ: 30, scale: 1.1 }}
                onClick={() => navigate(`/tienda/${shop.id}`)}
              >
                <div className="shop-roof">{shop.icon}</div>
                <div className="shop-walls">
                  <div className="wall front-wall">{shop.name}</div>
                  <div className="wall side-wall"></div>
                </div>
                <div className="shop-info">
                  <h4>{shop.name}</h4>
                  <p>{shop.desc}</p>
                  <span style={{ color: 'var(--violet-accent)', fontSize: '0.6rem', marginTop: '5px', display: 'block' }}>CLIC PARA ENTRAR</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mall-elevator"></div>
        </motion.div>
      </div>

      <section className="mall-details" style={{ marginTop: '100px' }}>
        <h2 className="section-title">ACCESO DIRECTO - NIVEL {activeFloor}</h2>
        <div className="services-grid">
          {shops.map((shop) => (
            <Link to={`/tienda/${shop.id}`} key={shop.id} style={{ textDecoration: 'none' }}>
              <div className="service-card">
                <span style={{ fontSize: '3rem' }}>{shop.icon}</span>
                <h3>{shop.name}</h3>
                <p>{shop.desc}</p>
                <button className="btn-glass" style={{ width: '100%', marginTop: '20px' }}>ENTRAR A TIENDA</button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Shopping3D
