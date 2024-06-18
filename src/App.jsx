
import './App.css'
import { AboutSection } from './sections/AboutSection'
import { FunctionsSection } from './sections/FunctionsSection'
import { HeroSection } from './sections/HeroSection'
import { KnowSection } from './sections/KnowAboutSection'
import { MembersSection } from './sections/MembersSection'
function App() {
 

  return (
    <div className="container">
      <HeroSection/>
      <KnowSection/>
      <AboutSection/>
      <FunctionsSection/>
      <MembersSection/>
     
    </div>
  )
}

export default App
