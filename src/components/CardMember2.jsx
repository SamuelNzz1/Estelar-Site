import { motion } from "framer-motion"



export const MemberCard2 = ({variants}) => {

    return (<motion.div variants={variants}  id= "kami-member"  className="member-card">
         <div className="left-member-card2">
            <h1 className="titulo">Kamily Gomes - Designer</h1>
            <p className="paragrafo-w2">Responsável por criar e desenvolver interfaces visuais,  colaborar com a equipe de desenvolvimento, manter a consistência visual e garantir uma boa experiência do usuário.</p>
        </div>
        
        <div className="right-member-card2 foto-width">
            <img className="foto2"  src="/Kami-foto.png" alt="" />
        </div>
       

    </motion.div>)
}