import customerImg from './img/customer-img.png';
import starImg from './img/star.png';
import quoteImg from './img/quote-up.png'

export const Testimonial = () => {
    return(
        <section id="testimonial" className="testimonial-section">
            <h2>What do customers say...</h2>
            <div className="d-flex flex-wrap justify-content-between customer-testimonial">
                <div className="customer-img-div">
                    <img src={customerImg} alt="customer face" className="customer-img" />
                    <img src={starImg} alt="star" className="star-img" />
                </div>
                <div className="customer-comment">
                    <img src={quoteImg} alt="quote" />
                    <h4>Amazing service</h4>
                    <p className="customer-words">Since the online marketplace can be a scary place, the presence of customer reviews on an online store helps establish authenticity, confidence, and trust among shoppers. </p>
                    <h6>Wade Warren</h6>
                    <p className="customer-occupation">Doctor</p>
                </div>
            </div>
        </section>
    )
}