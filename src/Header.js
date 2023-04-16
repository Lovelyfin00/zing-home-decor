import logo from './img/Logo.png'

export const Header = () => {
    return (
        <header className='nav-shadow'>
            <nav className='container d-flex flex-wrap justify-content-between align-items-center'>
                <div>
                    <a href="index.html"><img src={logo} alt='logo' /></a>
                </div>
                <div>
                    <ul className='d-flex justify-content-between links-style list-style align-items-center'>
                        <li className=''>
                            <a href="index.html" className='text-main-dark'>Home</a>
                        </li>
                        <li className='header-margin'>
                            <a href="#about-us" className='text-main-dark'>About Us</a>
                        </li>
                        <li className='header-margin'>
                            <a href="#products" className='text-main-dark'>Products</a>
                        </li>
                        <li className='header-margin margin-right testimonial-link'>
                            <a href="#testimonial" className='text-main-dark'>Testimonial</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='d-flex justify-content-between align-items-center contact-div list-style'>
                        <li className=''>
                            <a href="#contact" className='text-main-dark'>Contact</a>
                        </li>
                        <li className='header-margin'>
                            <a href="#buy-online" className='buy-online'>Buy online</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}