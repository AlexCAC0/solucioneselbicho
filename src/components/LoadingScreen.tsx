import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [text, setText] = useState('');
  const fullText = 'SOLUCIONES EL BICHO - INITIALIZING SYSTEMS...';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 1 }}
      onAnimationComplete={() => document.body.style.overflow = 'auto'}
    >
      <div className="loading-content">
        <motion.div 
          className="loading-logo"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ▲
        </motion.div>
        <div className="loading-text">{text}</div>
        <div className="loading-bar-container">
          <motion.div 
            className="loading-bar-fill"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
