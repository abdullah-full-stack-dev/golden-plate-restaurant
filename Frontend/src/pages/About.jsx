import React from 'react'
import '../CSS/About.css'
import aboutMainImg from "../assets/images/about-main-img4.jpg"
import aboutSecImg from "../assets/images/about-sec-img2.jpg"
import roundedImg from "../assets/images/roundedImg4.png"
import { SubTitle } from '../components/SubTitle'

export const About = () => {
  return (
    <div className='About-section'>
      <SubTitle text={"About The Golden Plate"} />
      <div className="About-cont">

        <div className="About-images-cont">



          <div className='About-images'>
            <img src={aboutMainImg} alt="aboutMainImg" />

            <div className='About-sec-image'>
              <img src={aboutSecImg} alt="aboutSecImg" />
            </div>
            <div className='roundedImgCont'>
              <img src={roundedImg} alt="aboutSecImg" />
            </div>
            <div className="since">


              <div className='since-content'>

                <div>
                  <p>SINCE</p>
                  <p className='year'>1998</p>
                </div>
              </div>
            </div>

          </div>

        </div>


        {/* --------------------------- About content --------------------------- */}
        <div className="About-content">

          <h1>Where Culinary Excellence <br />Meets Timeless Elegance</h1>
          <p>At The Golden Plate, we believe that dining is more than just enjoying a meal—it's about creating unforgettable moments. Our chefs carefully craft every dish using the freshest ingredients, combining traditional techniques with modern culinary artistry. From our elegant atmosphere to our exceptional hospitality, every detail is designed to offer a truly luxurious dining experience.</p>
          <ul>
            Features
            <li>Luxury Fine Dining Experience</li>
            <li>Farm-Fresh & Premium Ingredients</li>
            <li>Crafted by Passionate Master Chefs</li>
          </ul>
          <button>
            <div className='text text1'>Discover Our Story</div>
            <div className='text text2' aria-hidden={true}>Discover Our Story</div>
          </button>
        </div>

      </div>
    </div>
  )
}
