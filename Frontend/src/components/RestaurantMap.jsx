import React from 'react'
import '../CSS/RestaurantMap.css'
import { SubTitle } from './SubTitle'

export const RestaurantMap = () => {
    return (
        <div className='RestaurantMap-cont'>

            <SubTitle text={"Find us on Map"} />
            <h2>Visit The Golden Plate</h2>
            <p>
                Conveniently located in the heart of the city, <br /> we're ready to welcome
                you for an exceptional fine dining experience.
            </p>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.7559088295!2d72.7135437284832!3d19.081758704028818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1784701320522!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>

        </div>
    )
}
