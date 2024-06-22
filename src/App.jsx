
import './App.css'
import { AboutSection } from './sections/AboutSection'
import { FunctionsSection } from './sections/FunctionsSection'
import { HeroSection } from './sections/HeroSection'
import { KnowSection } from './sections/KnowAboutSection'
import { MembersSection } from './sections/MembersSection'
import { FooterSection } from './sections/FooterSection'
function App() {
 

  return (
    <div className="container">
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
