import React, { useState } from 'react'
import '../CSS/Footer.css'
import logo from "../assets/images/logo9.png"
import line from "../assets/images/line2.png"
import design7 from "../assets/images/design7.png"
import design8 from "../assets/images/design8.png"
import design9 from "../assets/images/design9.png"
import design10 from "../assets/images/design10.png"
import { MdMailOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

export const Footer = () => {


    const [formData, setFormData] = useState({
        email: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post("https://golden-plate-restaurant.onrender.com/api/create/subscribe", formData).then((res) => {

            console.log(res.data);


            setFormData({
                email: ""
            });
        })


        toast.success("Subscribed Successfully!")
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 100);

    };

    return (
        <div className='Footer-section'>

            <img src={design7} alt="design7" className='design7' />
            <img src={design8} alt="design8" className='design8' />
            <img src={design9} alt="design9" className='design9' />
            <img src={design10} alt="design10" className='design10' />

            <div className="Footer-content">

                <div className='Footer-col'>
                    <ul>
                        <li><Link to={"/"}>HOME</Link></li>
                        <li><a href="/#FeaturedMenu">MENUS</a></li>
                        <li><Link to={"/about"}>ABOUT US</Link></li>
                        <li><a href="/#ourChef">OUR CHEF</a></li>
                        <li><Link to={"/contact"}>CONTACT</Link></li>
                        <li><Link to={"/policy"}>POLICY</Link></li>
                    </ul>
                </div>

                <div className='Footer-col'>

                    <div>
                        <div className='Footer-logo-cont'>
                            <img src={logo} alt="logo" className='Footer-logo' />
                        </div>

                        <div className='Footer-text-content'>
                            <p>Golden Plate Restaurant, Mumbai 2487, India</p>
                            <p>Open: 10:00 am - 10:00 pm</p>
                            <p>booking@gp.com</p>
                            <p>Booking Request - +91 896 857 8990</p>
                        </div>
                    </div>
                </div>

                <div className='Footer-col'>
                    <ul>
                        <li><a href="https://www.instagram.com/a.k_7750/" target="_blank">INSTAGRAM</a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=100055163133778" target="_blank">FACEBOOK</a></li>
                        <li><a href="https://github.com/abdullah-full-stack-dev" target="_blank">GITHUB</a></li>
                        <li>TWITTER</li>
                        <li><a href="https://www.linkedin.com/in/abdullah-khan-9a2647406/" target="_blank">LINKEDIN</a></li>
                        <li>YOUTUBE</li>
                    </ul>
                </div>

            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                <img src={line} alt="line" width={150} />
            </div>
            <div className="newsletter-box">
                <h1>Get News & Offers</h1>
                <p>Subscribe us & Get <span>20% off</span></p>

                <div>
                    <form onSubmit={handleSubmit}>
                        <div className='newsletter-box-input-cont'>
                            <MdMailOutline color='#f8f8f8' size={22} />
                            <input type="email" placeholder='Your email' name='email' value={formData.email}
                                onChange={handleChange} required />
                        </div>
                        <button>Subscribe</button>
                    </form>
                </div>
            </div>

            <p className='footer-bottom'>© 2026 Golden Plate Restaurant. All right reserved.</p>

        </div>
    )
}
