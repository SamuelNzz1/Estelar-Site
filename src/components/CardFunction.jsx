import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export const CardFunction = ({title, subtitle, cor, svg, variants}) => {
 
  return <motion.div
       
       whileHover={{scale: 1.1, transition: 0.5}}
        variants={variants}

       
      
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