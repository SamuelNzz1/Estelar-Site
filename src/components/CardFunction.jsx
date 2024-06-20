import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export const CardFunction = ({title, subtitle, cor, svg, constraintsRef}) => {
 
  return <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
       whileInView={{ opacity: 1, scale: 1 }}
       transition={{duration: 1}}
       whileHover={{scale: 1.1, transition: 0.5}}
        

        drag dragElastic={0.2} dragConstraints={constraintsRef} whileDrag={{scale: 1.1}} 
      
        className="card-function">
        <motion.img className='svg-card' src= {svg} width={90} alt="" />
        <h1 className="title-card" style={{color: cor}}>
          {title}
        </h1>
        <p className="paragrafo-card">
          {subtitle}
        </p>
        
        <div className="borda" style={{backgroundColor: cor}} />
    </motion.div> 
    
 
}

CardFunction.propTypes = {
  cor: PropTypes.string.isRequired,
  svg: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  constraintsRef: PropTypes.object.isRequired,
};