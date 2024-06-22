
import { motion } from "framer-motion"
export const MemberCard3 = ({variants}) => {

    return (<motion.div variants={variants}   className="member-card">
        <div className="left-member-card">
            <img className="foto3"  src="/Laura-foto.png" alt="" />
        </div>
        <div className="right-member-card">
            <h1>Laura Tavares - Analista</h1>
            <p className="paragrafo-w">É responsável por coletar e analisar dados, definir requisitos e garantir a conformidade com os objetivos do projeto.</p>
        </div>

    </motion.div>)
}