import React from 'react'
import '../CSS/MasterChef.css'
import design3 from "../assets/images/design3.png"
import design4 from "../assets/images/design4.png"

import chef from "../assets/images/chef.jpg"
import { SubTitle } from './SubTitle'

export const MasterChef = () => {
    return (
        <div className='MasterChef' id='ourChef'>

            <img src={design3} alt="design3" className='design3' />
            <img src={design4} alt="design4" className='design4' />

            <div className='MasterChef-section'>

                <SubTitle text={"Our Master Chef"} />

                <div className='MasterChef-cont'>
                    <div className="MasterChef-image">
                        <img src={chef} alt="chef" />
                    </div>
                    <div className="MasterChef-content">
                        <h1>Meet the Culinary Artist <br />Behind Every Masterpiece</h1>
                        <p>At The Golden Plate, our Executive Chef brings years of culinary expertise, creativity, and passion to every plate. <br />Inspired by global flavors and crafted with the finest ingredients, each dish is designed to deliver an unforgettable fine dining experience.</p>
                        <ul>
                            <li><span>Experience</span> : 15+ Years of Culinary Excellence</li>
                            <li><span>Award</span> : Award-Winning Fine Dining Expertise</li>
                            <li><span>Signature Dishes</span> : 500+ Signature Recipes Crafted</li>
                            <li><span>Philosophy</span> : Passion, Precision & Perfection in Every Dish</li>
                        </ul>
                        <button>
                            <div className='text text1'>Meet Our Team</div>
                            <div className='text text2' aria-hidden={true}>Meet Our Team</div>
                        </button>
                    </div>


                </div>

            </div>
        </div>
    )
}
