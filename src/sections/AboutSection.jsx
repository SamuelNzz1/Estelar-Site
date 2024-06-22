import { useEffect } from "react";
import "./AboutSectionStyle.css";
import { easeIn, motion } from "framer-motion";

export const AboutSection = () => {
  const widthWindow = window.innerWidth;
  const dataImg = [
    {
      img : "/mockup1.png"
    },{
      img : "/mockup2.png"
    },{
      img : "/mockup3.png"
    },{
      img : "/mockup4.png"
    },{
      img : "/mockup5.png"
    }
  ]
  const sliderVariants =  {
    initial : {
      x: 0
    },
    animate: {
      x: "-100%",
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear"
      }
    }
  }

  return <section id="about-section" className="about-section">
    <div className="left">
      
      <motion.img 
      initial = {{x:"-100%", y: "100%"}}
      whileInView={{x:0, y:0}}
      transition={{duration: 1}}
      className="mockup"  src="/mockupViews.png" alt="" />
     
        
    </div>
    <div className="right">
        <motion.h1 initial = {{opacity: 0, scale: 0.5}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 1}} className="principal-text-right">Qual a nossa <span className="span-mission">missão</span>?</motion.h1>
        <motion.p initial = {{opacity: 0, scale: 0.5}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 1}} className="paragrafo-about">O objetivo do estelar é ajudar você a aprender sobre astronomia enquanto se diverte! Utilizando recursos de gamificação e tecnologias inovadoras.</motion.p>
        <a href="#functions-section">
        <motion.button  
        initial={{ background: 'linear-gradient(45deg,  #30102F, #D60E62)', opacity: 0, scale: 0.5 }}
        whileHover={{ background: 'linear-gradient(45deg, #110726, #0E6AD6)' }}
        whileInView={{opacity: 1, scale: 1}}
            transition={{ duration: 0.5 }}
        className="about-button"> Prosseguir <img src="/arrowBottom.svg" alt="" /></motion.button>
        </a>
    </div>
  </section> 
}