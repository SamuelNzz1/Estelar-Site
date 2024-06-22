
import './App.css'
import { AboutSection } from './sections/AboutSection'
import { FunctionsSection } from './sections/FunctionsSection'
import { HeroSection } from './sections/HeroSection'
import { KnowSection } from './sections/KnowAboutSection'
import { MembersSection } from './sections/MembersSection'
import { FooterSection } from './sections/FooterSection'
import {motion, useScroll} from "framer-motion"
function App() {
 const {scrollYProgress} = useScroll();

  return (
    <div className="container">
      <motion.div 
        style={{
          
          scaleX: scrollYProgress,
          zIndex: 3,
          transformOrigin: "left",
          backgroundColor: "#F8BC3B",
          position: "sticky",
          top: 0,
          width: "100%",
          height: "15px"
        }}
      />
      <HeroSection/>
      <KnowSection/>
      <AboutSection/>
      <FunctionsSection/>
      <MembersSection/>
      <FooterSection/>
      
    </div>
  )
}

export default App
