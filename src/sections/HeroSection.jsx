import './HeroSectionStyle.css'

export const HeroSection = () => {
    return <nav className="hero-section"> 
      <a className='logo' href='#' > 
          <img src="/vite.svg" alt="" width={35} />
          <img src="/estelarlogo.svg" alt="" width={150}  />
      </a>

      <ul className="listaLinks">
        <li> <a href="#about-section"> Objetivos </a> </li>
        <li> <a href="#function-section"> Funcionalidades </a></li>
        <li> <a href="#members-section"> Quem somos </a></li>
      </ul>

    </nav>
}