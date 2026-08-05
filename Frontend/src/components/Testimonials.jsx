import React from 'react'
import '../CSS/Testimonials.css'
import test1 from "../assets/images/test1.jpg"
import test2 from "../assets/images/test2.jpg"
import test3 from "../assets/images/test3.jpg"
import test4 from "../assets/images/test4.jpg"
import design5 from "../assets/images/design5.png"
import design6 from "../assets/images/design6.png"
import { SubTitle } from './SubTitle'
import { IoIosStar, IoIosStarHalf } from 'react-icons/io'

export const Testimonials = () => {
    return (
        <div className='Testimonials-section'>
            <img src={design5} alt="design5" className='design5' />
            <img src={design6} alt="design6" className='design6' />
            <SubTitle text={"Testimonials"} />
            <div className="Testimonials-cont">
                <h1>What Our Guests Say</h1>
                <p>Every visit to The Golden Plate is crafted to create unforgettable moments. <br /><span className='nob'>Here's what our valued guests have to say about their dining experience.</span></p>

                <div className="Testimonials-content">
                    <div className="Test-cont">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={test1} alt="test1" />
                        </div>
                        <h2>Sarah Johnson</h2>
                        <h3>Food Blogger</h3>
                        <p>"Absolutely outstanding! Every dish was beautifully presented and bursting with flavor. <span className='nob2'>The atmosphere, service, and attention to detail made this one of the best fine dining experiences I've ever had.</span>"</p>
                        <span style={{ display: "flex", justifyContent: "center", gap: "6px" }}><IoIosStar color='#ffbd67' /> <IoIosStar color='#ffbd67' /> <IoIosStar color='#ffbd67' /> <IoIosStar color='#ffbd67' /> <IoIosStar color='#ffbd67' /></span>
                    </div>
                    <div className="Test-cont">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={test2} alt="test2" />
                        </div>
                        <h2>Michael Carter</h2>
                        <h3>Business Executive</h3>
                        <p>"From the elegant ambience to the exceptional cuisine, everything exceeded expectations. <span className='nob2'>The staff was welcoming and every course felt like a work of art.</span> "</p>
                        <span style={{ display: "flex", justifyContent: "center", gap: "6px" }}><IoIosStar color='#ffbd67' /> <IoIosStar color='#ffbd67' /> <IoIosStar color='#ffbd67' /> <IoIosStar color='#ffbd67' /> <IoIosStarHalf color='#ffbd67' /></span>
                    </div>
                    <div className="Test-cont">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={test3} alt="test3" />
                        </div>
                        <h2>Emily Wilson</h2>
                        <h3>Travel Enthusiast</h3>
                        <p>"The Golden Plate truly delivers a luxury dining experience. <span className='nob2'>The chef's signature dishes were incredible and the service was warm, professional, and unforgettable.</span> "</p>
                        <span style={{ display: "flex", justifyContent: "center", gap: "6px" }}><IoIosStar color='#ffbd67' /> <IoIosStar color='#ffbd67' /> <IoIosStar color='#ffbd67' /> <IoIosStar color='#ffbd67' /> <IoIosStar color='#ffbd67' /></span>
                    </div>
                    <div className="Test-cont">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={test4} alt="test4" />
                        </div>
                        <h2>Jade Carter</h2>
                        <h3>Business Executive</h3>
                        <p>"Absolutely amazing! Every dish was beautifully presented and bursting with flavor. <span className='nob2'>The Golden Plate truly delivers a luxury dining experience.</span> "</p>
                        <span style={{ display: "flex", justifyContent: "center", gap: "6px" }}><IoIosStar color='#ffbd67' /> <IoIosStar color='#ffbd67' /> <IoIosStar color='#ffbd67' /> <IoIosStar color='#ffbd67' /> <IoIosStarHalf color='#ffbd67' /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
