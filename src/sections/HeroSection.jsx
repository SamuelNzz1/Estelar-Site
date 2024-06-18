import './HeroSectionStyle.css'
import { motion } from 'framer-motion'
export const HeroSection = () => {
    return <nav

    className="hero-section"> 
      
      <motion.a initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}  className='logo' href='#' > 
          <img src="/vite.svg" alt="" width={35} />
          <img src="/estelarlogo.svg" alt="" width={150}  />
      </motion.a>

      <ul className="listaLinks">
        <li> <motion.a  initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }} href="#about-section"> Objetivos </motion.a> </li>
        <li> <motion.a  initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }} href="#function-section"> Funcionalidades </motion.a></li>
        <li> <motion.a  initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }} href="#members-section"> Quem somos </motion.a></li>
      </ul>

    </nav>
}