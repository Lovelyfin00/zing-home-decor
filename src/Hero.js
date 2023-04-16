import heroEl from './img/hero-element.png'
import searchIcon from './img/search-normal.png'

export const Hero = () => {
    return (
        <section className="section-margin hero-section">
            <div className="text-center hero-text">
                <h1>Amazing furniture for your home</h1>
                <p>We think the chair is the most important piece of furniture in your home. Because if you love the chair you are sitting in chances are you will love the rest of the room.</p>
                <img src={heroEl} alt="hero element" className='hero-element' />
            </div>
            <div className="hero-img">
                <div className="serach-input">
                    <img src={searchIcon} alt="search icon" className='search-icon' />
                    <input type="search" name="product-search" id="product-search" placeholder='Search your product' />
                </div>
            </div>
        </section>
    )
}