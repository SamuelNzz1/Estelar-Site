import './HeroSectionStyle.css'
import { motion } from 'framer-motion'
export const HeroSection = () => {
    return <motion.nav 
    initial={ { x: '100vw' } }  // Posição inicial fora da tela à direita
    animate={ { x: 0 } }        // Posição final (ponto zero no eixo X)
    transition={{ type: 'spring'}} 

    className="hero-section"> 
      
      <a className='logo' href='#' > 
          <img src="/vite.svg" alt="" width={35} />
          <img src="/estelarlogo.svg" alt="" width={150}  />
      </a>

      <ul className="listaLinks">
        <li> <a href="#about-section"> Objetivos </a> </li>
        <li> <a href="#function-section"> Funcionalidades </a></li>
        <li> <a href="#members-section"> Quem somos </a></li>
      </ul>

    </motion.nav>
}