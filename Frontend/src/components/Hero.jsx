import React, { useEffect, useState } from 'react'
import '../CSS/Hero.css'
import line from "../assets/images/line.png"
import bookingBanner from "../assets/images/booking-banner.png"
import { slides } from '../assets/Data/HeroSliderData'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { useNavigate } from "react-router-dom";

export const Hero = () => {

    const navigate = useNavigate();

    const [current, setCurrent] = useState([0])

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length)
        }, 4000)

        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    return (
        <div className='hero-section'>

            <img
                key={current}
                src={slides[current].image}
                alt="img"
            />

            <div className='arrow-left' onClick={prevSlide}>
                <MdArrowBackIosNew size={19} className='arrow' />
            </div>


            <div className="content">
                <span>{slides[current].subTitle}</span><br />
                <div style={{ display: "flex", justifyContent: "center", margin: "6px 0 30px" }}>
                    <img src={line} alt="line" className='line' />
                </div>

                <h1>{slides[current].title}</h1>
                <p>{slides[current].description}</p>

                <button onClick={() => navigate(slides[current].link)}>
                    <div className='text text1'>{slides[current].button}</div>
                    <div className='text text2' aria-hidden={true}>{slides[current].button}</div>
                </button>


            </div>
            <div className='border-rotate'></div>
            <a href="#reserveTable">
                <div className="booking-banner" >
                    <img src={bookingBanner} alt="bookingBanner" />
                </div>
            </a>

            <div className='arrow-right' onClick={nextSlide}>
                <MdArrowForwardIos size={19} className='arrow' />
            </div>

        </div>
    )
}
