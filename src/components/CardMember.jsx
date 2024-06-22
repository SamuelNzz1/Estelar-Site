import { motion } from "framer-motion"



export const MemberCard = ({variants}) => {

    return (<motion.div variants={variants}   className="member-card">
        <div className="left-member-card foto-width">
            <img className="foto"  src="/Samuel-foto.png" alt="" />
        </div>
        <div className="right-member-card">
            <h1 className="titulo">Samuel Novais - Programador</h1>
            <p className="paragrafo-w">É responsável por escrever, testar e manter o código-fonte, implementar funcionalidades e gerenciar as versões.</p>
        </div>

    </motion.div>)
}