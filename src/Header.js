import logo from './img/Logo.png'

export const Header = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <a href="index.html"><img src={logo} alt='logo' /></a>
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <ul className="nav-links" id="nav-links">
                    <li>
                        <a href="index.html" className="nav-link"> Home </a>
                    </li>
        
                    <li>
                        <a href="#about-us" className="nav-link"> About us </a>
                    </li>
        
                    <li>
                        <a href="#products" className="nav-link"> Products </a>
                    </li>
        
                    <li>
                        <a href="#testimonial" className="nav-link"> Testimonial</a>
                    </li>
                </ul>
    
                <ul className="nav-links second-nav-section" id="nav-links">
                    <li>
                        <a href="#contact" className='nav-link'>Contact</a>
                    </li>
                    <li>
                        <a href="#buy-online" className='nav-link buy-online'>Buy online</a>
                    </li>
                </ul>
            </div>
      </nav>
    )
}