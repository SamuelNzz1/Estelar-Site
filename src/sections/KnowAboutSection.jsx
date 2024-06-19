
import { motion } from 'framer-motion';
import './KnowAboutStyles.css';

export const KnowSection = () => {
  return (
    <motion.section 
    
    initial={{ opacity: 0}}  
    transition={{duration: 1}}
    whileInView={{opacity: 1}}
    
    
    className="know-section">
      <div className="message-card">
        <motion.div initial={{ opacity: 0, scale: 0.5 }}  
    transition={{duration: 2}}
    whileInView={{opacity: 1, scale: 1}} className='know-text'>
          <motion.h1 className='text-h1-know'>Descubra o universo com o</motion.h1>
          <div>
            <motion.h1 className='text-h1-know'>Estelar!</motion.h1>
            <motion.img src="/estelarsublinhado.svg" alt="" />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}  
    transition={{duration: 2}}
    whileInView={{opacity: 1, scale: 1}} className='paragrafo'>
          <motion.p className='paragrafoKnow'>Um aplicativo que tem como objetivo auxiliar no processo de</motion.p>
          <motion.p className='paragrafoKnow'>aprendizado de astronomia</motion.p>
        </motion.div>
        <a href='#about-section'>
          <motion.button
            
            initial={{ background: 'linear-gradient(45deg,  #30102F, #D60E62)', opacity: 0, scale: 0.5 }}
            whileHover={{ background: 'linear-gradient(45deg, #110726, #0E6AD6)' }}
            whileInView={{opacity: 1, scale: 1}}
            transition={{ duration: 0.5 }}
            className='know-button'
          >
            Conheça mais <img src="/arrowBottom.svg" alt="" />
          </motion.button>
        </a>
      </div>
      <motion.img
        initial={{y: "-100%"}}  
        transition={{duration: 2}}
        whileInView={{y: 0}}
        
        className="planet-fundo"
        src="/planetBackground.svg"
        alt=""

      />
    </motion.section>
  );
};


