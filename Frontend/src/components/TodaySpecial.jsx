import React from 'react'
import '../CSS/TodaySpecial.css'
import special1 from "../assets/images/special1.jpg"
import special2 from "../assets/images/special2.jpg"
import special3 from "../assets/images/special3.jpg"
import special4 from "../assets/images/special4.jpg"
import { SubTitle } from './SubTitle'

export const TodaySpecial = () => {
    return (
        <div className='TodaySpecial-section'>
            <div className="TodaySpecial-content">
                <SubTitle text={"Chef's Selection"} />
                <h1>Today's Special Dish</h1>
                <p>Discover today's handpicked specialties, crafted with the finest ingredients <br /> <span className='nob'>and presented with exceptional culinary artistry for an unforgettable dining experience.</span></p>
                <div className="TodaySpecial-images">
                    <div className="TodaySpecial-image1">
                        <img src={special1} alt="" />
                        <h2>Royal Truffle Steakum</h2>
                        <p className='description'>Perfectly grilled premium steak topped with rich truffle butter, served alongside roasted vegetables and our signature herb sauce.</p>
                        <p>₹1,299</p>
                        <button>
                            <div className='text text1'>VIEW FULL MENU</div>
                            <div className='text text2' aria-hidden={true}>VIEW FULL MENU</div>
                        </button>
                    </div>
                    <div className="TodaySpecial-image2">
                        <img src={special2} alt="" />
                        <h2>Creamy Seafood Pasta</h2>
                        <p className='description'>Fresh shrimp and mussels tossed in a creamy parmesan sauce with handmade pasta and aromatic herbs.</p>
                        <p>₹999</p>
                        <button>
                            <div className='text text1'>VIEW FULL MENU</div>
                            <div className='text text2' aria-hidden={true}>VIEW FULL MENU</div>
                        </button>
                    </div>
                    <div className="TodaySpecial-image3">
                        <img src={special3} alt="" />
                        <h2>Wagyu Gourmet Burger</h2>
                        <p className='description'>Juicy Wagyu beef layered with aged cheddar, caramelized onions, crisp lettuce and our house-made signature sauce.</p>
                        <p>₹899</p>
                        <button>
                            <div className='text text1'>VIEW FULL MENU</div>
                            <div className='text text2' aria-hidden={true}>VIEW FULL MENU</div>
                        </button>
                    </div>
                    <div className="TodaySpecial-image4">
                        <img src={special4} alt="" />
                        <h2>Golden Chocolate Delight</h2>
                        <p className='description'>A rich chocolate mousse finished with edible gold flakes, fresh berries and silky chocolate glaze.</p>
                        <p>₹599</p>
                        <button>
                            <div className='text text1'>VIEW FULL MENU</div>
                            <div className='text text2' aria-hidden={true}>VIEW FULL MENU</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
