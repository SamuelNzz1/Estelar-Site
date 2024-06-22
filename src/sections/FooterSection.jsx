import "./FooterSectionStyle.css"
import { motion } from "framer-motion"
export const FooterSection = () => {
  const subject = "olá"
  const body = ""
  const mailtoHref = `mailto:oprojetoestelar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  
  return <motion.section initial = {{x: "-100%"}} whileInView={{x:0}} transition={{duration: 0.5}} id="footer-section" className="footer-section">
    <div className="left-footer">
    <motion.div className='logo-container' href='#' > 
          <img src="/vite.svg" alt="" width={35} />
          <img src="/estelarlogo.svg" alt="" width={150}  />
      </motion.div>
      <h4>
        Contatos
      </h4>
      <motion.a target="_blank" href="https://www.instagram.com/oprojetoestelar/" className="instagram">
        <img className="inst-logo" src="/instagram-logo.svg" alt="" />
        <p>@oprojetoestelar</p>
      </motion.a>
      <motion.a target="_blank"  href={mailtoHref} className="email">
        <img className="email-logo" src="/email-logo.svg" alt="" />
        <p>oprojetoestelar@gmail.com</p>
      </motion.a>
    </div>
    <div className="right-footer">
      <img className="img-footer" src="/Feira-Tecnologica.png" alt="" />
      <img className="img-footer" src="/Fundacao.png" alt="" />
    </div>
  </motion.section> 
}