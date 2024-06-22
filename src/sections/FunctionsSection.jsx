import "./FunctionSectionStyle.css";
import {motion} from "framer-motion"
import { CardFunction } from "../components/CardFunction";
import { useRef } from "react";

const dataFunctions = [
  {
    title: "JORNADA ASTRONÔMICA",
    subtitle: "Um quiz interativo de astronomia que torna o aprendizado divertido, competindo por pontos sobre planetas, estrelas, galáxias e fenômenos cósmicos.",
    cor: "#F8BC3B",
    svg: "/jornadaSvg.svg"

  },
  {
      title: "PREPARATÓRIO PARA OBA",
    subtitle: "Oferecemos um banco de questões de provas antigas da Olimpíada Brasileira de Astronomia para ajudar estudantes a se prepararem a nível olímpico.",
    cor: "#7291FF",
    svg: "/prepSvg.svg"
  },
  {
    title: "ESPAÇO VIRTUAL",
    subtitle: "Explore informações detalhadas sobre astros e visualize-os em realidade aumentada para aprender e interagir de forma imersiva com objetos celestes!",
    cor: "#F254CF",
    svg: "/espaSvg.svg"
  }
]

export const FunctionsSection = () => {
  
  const constraintsRef = useRef();
  const containerVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition:{
        staggerChildren: 0.80
      }
      
    }
  }
  
  const cardVariant = { 
    hidden: {
      opacity: 0.25,
      scale: 0.5
    },  
    show : {
      opacity: 1,
      scale: 1,
    },

  }
  return <section ref={constraintsRef} id="functions-section" className="function-section">
 
      <motion.h1 initial = {{opacity: 0, scale: 0.5}} transition={{duration: 0.5}} whileInView = {{opacity: 1, scale: 1}} className="functions-title">Funcionalidades</motion.h1>
      <motion.p initial = {{opacity: 0, scale: 0.5}} transition={{duration: 0.5}}  whileInView = {{opacity: 1, scale: 1}} className="functions-paragrafo">Visando alcançar o objetivo de maneira eficaz, para melhorar o seu desempenho acadêmico e olímpico, o Estelar oferece:</motion.p> 
  
    <motion.div variants={containerVariant} initial="hidden" whileInView="show"  className="functions-cards">
      {
        dataFunctions.map((card, index) => {
          return (
            <CardFunction
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              cor={card.cor}
              svg={card.svg} 
              variants={cardVariant}
            /> 
          )
        })
      }
    </motion.div>
  </section> 
}