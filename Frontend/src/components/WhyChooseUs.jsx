import React from 'react'
import '../CSS/WhyChooseUs.css'
import whyChoose1 from "../assets/images/whyChoose1.png"
import whyChoose2 from "../assets/images/whyChoose2.png"
import whyChoose3 from "../assets/images/whyChoose3.png"
import whyChoose4 from "../assets/images/whyChoose4.png"
import { SubTitle } from './SubTitle'

export const WhyChooseUs = () => {
    return (
        <div className='WhyChooseUs-section'>
            <SubTitle text={"Why Choose Us"} />
            <div className="WhyChooseUs-cont">
                <h1>Experience the Art of Fine Dining</h1>
                <p>At The Golden Plate, every meal is thoughtfully crafted using premium ingredients, culinary expertise
                    <br /><span className='nob'>,and exceptional hospitality. We create memorable dining experiences where flavor, elegance, and impeccable service come together.</span></p>

                <div className="WhyChooseUs-content">
                    <div className="whyChoose-cont">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={whyChoose1} alt="whyChoose1" />
                        </div>
                        <h2>Fresh Ingredients</h2>
                        <p>We carefully select fresh, locally sourced ingredients to ensure every dish is rich in flavor and exceptional in quality.</p>
                    </div>
                    <div className="whyChoose-cont">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={whyChoose2} alt="whyChoose2" />
                        </div>
                        <h2>Expert Master Chefs</h2>
                        <p>Our experienced chefs combine creativity with culinary excellence to deliver beautifully crafted signature dishes.</p>
                    </div>
                    <div className="whyChoose-cont">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={whyChoose3} alt="whyChoose3" />
                        </div>
                        <h2>Luxury Dining Experience</h2>
                        <p>Enjoy a sophisticated atmosphere designed to make every lunch, dinner, and celebration truly unforgettable.</p>
                    </div>
                    <div className="whyChoose-cont">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={whyChoose4} alt="whyChoose4" />
                        </div>
                        <h2>Exceptional Service</h2>
                        <p>Our attentive team is dedicated to providing warm hospitality and personalized service from the moment you arrive.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
