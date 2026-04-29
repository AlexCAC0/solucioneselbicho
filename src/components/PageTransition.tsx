import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ 
          opacity: 0, 
          scale: 1.5, 
          filter: "blur(10px)",
          transition: { duration: 0.4 } 
        }}
        transition={{ duration: 0.6, ease: "circOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
