import React from 'react'
import '../CSS/FeaturedMenu.css'
import img1 from "../assets/images/niche1.jpg"
import img2 from "../assets/images/niche2.jpg"
import img3 from "../assets/images/niche3.jpg"

import design1 from "../assets/images/hero-design1.png"
import design2 from "../assets/images/hero-design2.png"
import { SubTitle } from './SubTitle'

export const FeaturedMenu = () => {
    return (
        <div className='FeaturedMenu' id='FeaturedMenu'>
            <img src={design1} alt="design1" className='design1' />
            <div className='FeaturedMenu-section'>

                <div className="FeaturedMenu-content">
                    <SubTitle text={"Culinary Excellence"} />
                    <h1>Discover Our Signature Menu</h1>
                    <p>From delightful breakfasts to chef-inspired main courses and handcrafted signature drinks, <br /> <span>every dish is thoughtfully prepared to deliver an unforgettable fine dining experience.</span></p>

                    <div className="FeaturedMenu-images">
                        <div className='FeaturedMenu-image-cont'>
                            <div className='FeaturedMenu-image'>
                                <div className="image">
                                    <img src={img1} alt="cat" />
                                </div>
                                <h2>Breakfast</h2>
                                <p>VIEW MENU</p>
                            </div>
                        </div>
                        <div className='FeaturedMenu-image-cont'>
                            <div className='FeaturedMenu-image'>
                                <div className="image">
                                    <img src={img2} alt="cat" />
                                </div>
                                <h2>Main Course</h2>
                                <p>VIEW MENU</p>
                            </div>
                        </div>
                        <div className='FeaturedMenu-image-cont'>
                            <div className='FeaturedMenu-image'>
                                <div className="image">
                                    <img src={img3} alt="cat" />
                                </div>
                                <h2>Signature Drinks</h2>
                                <p>VIEW MENU</p>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
            <img src={design2} alt="design2" className='design2' />
        </div>
    )
}
