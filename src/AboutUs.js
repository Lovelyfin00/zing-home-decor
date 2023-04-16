import aboutUsImg1 from './img/about-us-img1.png'
import aboutUsImg2 from './img/about-us-img2.png'
import aboutUsImg3 from './img/about-us-img3.png'
import aboutUsImg4 from './img/about-us-img4.png'

export const AboutUs = () => {
    return(
        <section id="about-us" className="container about-us-section">
            <div className="section-margin d-flex flex-wrap">
                <div className="about-us-text margin-right-1">
                    <h2>About us</h2>
                    <p>Comfort is key and how you feel about your chair will affect how you feel and your mood.</p>
                    <div className="d-flex flex-wrap about-us-details">
                        <div className="about-us-mission about-us-details-width margin-right-1">
                            <h3>1</h3>
                            <h4>Mission</h4>
                            <p>It makes people at ease and feel like they want to open up.</p>
                        </div>
                        <div className="about-us-details-width">
                            <h3>2</h3>
                            <h4>Motivation</h4>
                            <p>The perfect mix of art that complements the room's style.</p>
                        </div>
                        <div className="about-us-details-width">
                            <h3>3</h3>
                            <h4>Vision</h4>
                            <p>Along with a healthy dose of negative space to give the eyes spots to rest.</p>
                        </div>
                        <div className="about-us-details-width">
                            <h3>4</h3>
                            <h4>Goal</h4>
                            <p>Art that has meaning to the people who live in the space,</p>
                        </div>
                    </div>
                </div>
                <div className="about-us-images d-flex flex-wrap">
                    <div className="about-us-details-width about-us-first-img">
                        <div>
                            <img src={aboutUsImg4} alt="about us image1" className='img1' />
                        </div>
                        <div>
                            <img src={aboutUsImg3} alt="about us image2" />
                        </div>
                    </div>
                    <div className="about-us-details-width">
                        <div>
                            <img src={aboutUsImg2} alt="about us image3" className='img3' />
                        </div>
                        <div>
                            <img src={aboutUsImg1} alt="about us image4" className='img4' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}