import { motion } from "framer-motion"



export const MemberCard = ({variants}) => {

    return (<motion.div variants={variants}   className="member-card">
        <div className="left-member-card">
            <img className="foto"  src="/Samuel-foto.png" alt="" />
        </div>
        <div className="right-member-card">
            <h1>Samuel Novais - Programador</h1>
            <p className="paragrafo-w">É responsável por escrever, testar e manter o código-fonte, implementar funcionalidades e gerenciar as versões.</p>
        </div>

    </motion.div>)
}