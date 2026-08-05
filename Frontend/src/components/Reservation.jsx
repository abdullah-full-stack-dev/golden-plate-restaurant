import React, { useState } from 'react'
import '../CSS/Reservation.css'
import reserveimg from "../assets/images/reserve-img3.jpg"
import line from "../assets/images/line.png"
import { SubTitle } from './SubTitle'
import { FaRegUser } from 'react-icons/fa'
import { IoTimeOutline } from 'react-icons/io5'
import { MdOutlineCalendarToday } from 'react-icons/md'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const Reservation = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        persons: "",
        date: "",
        time: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post("https://golden-plate-restaurant.onrender.com/api/reservation/create", formData).then((res) => {

            console.log(res.data);


            setFormData({
                name: "",
                email: "",
                phone: "",
                persons: "",
                date: "",
                time: "",
                message: "",
            });
        })


        toast.success("Reservation Booked Successfully!")
        navigate("/")
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 100);

    };

    return (
        <div className='Reservation-section' id='reserveTable'>
            <SubTitle text={"Reservation"} />
            <h1>Reserve Your Table</h1>
            <p>Experience an unforgettable fine dining journey at The Golden Plate. <br /><span className='nob'>Reserve your table today and let us prepare an exceptional culinary experience tailored just for you.</span></p>
            <div className='line-cont'>
                <img src={line} alt="line" width={150} />
            </div>
            <div className="Reservation-content">
                <div className="Reservation">
                    <div className='reserve-img-cont'>
                        <img src={reserveimg} alt="reserve-img1" />
                    </div>


                    <div className='Reservation-form-parent-cont'>
                        <div className="Reservation-form-cont">
                            <h1>Online Reservation</h1>
                            <p>Booking request <span>+91 896 857 8990</span> or fill out the order form</p>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <input type="email" placeholder='Your Email' autoComplete="email" name='email' value={formData.email}
                                        onChange={handleChange} required />
                                </div>
                                <div className='name-number-cont'>

                                    <div>
                                        <input type="text" placeholder='Your Name' autoComplete="name" name='name' value={formData.name}
                                            onChange={handleChange} required />
                                    </div>

                                    <div>
                                        <input type="tel" placeholder='Phone Number' name='phone' value={formData.phone}
                                            onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className='person-date-time-cont'>
                                    <div className='wrapper'>

                                        <FaRegUser size={13} color='white' className='userIcon' />
                                        <select name='persons' value={formData.persons}
                                            onChange={handleChange} required>

                                            <option value="1">1 Person</option>
                                            <option value="2">2 Person</option>
                                            <option value="3">3 Person</option>
                                            <option value="4">4 Person</option>
                                            <option value="5">5+ Person</option>
                                        </select>
                                    </div>
                                    <div className='wrapper'>
                                        <MdOutlineCalendarToday color='white' className='calenderIcon' />
                                        <input type="date" placeholder='Select Date' name='date' value={formData.date}
                                            onChange={handleChange} required />
                                    </div>
                                    <div className='wrapper'>
                                        <IoTimeOutline color='white' className='watchIcon' />
                                        <select name='time' value={formData.time}
                                            onChange={handleChange} required>

                                            <option>10:00 am</option>
                                            <option>11:00 am</option>
                                            <option>12:00 am</option>
                                            <option>01:00 pm</option>
                                            <option>02:00 pm</option>
                                            <option>03:00 pm</option>
                                            <option>04:00 pm</option>
                                            <option>05:00 pm</option>
                                            <option>06:00 pm</option>
                                            <option>07:00 pm</option>
                                            <option>08:00 pm</option>
                                            <option>09:00 pm</option>
                                            <option>10:00 pm</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <textarea placeholder='Message' name='message' value={formData.message}
                                        onChange={handleChange} ></textarea>
                                </div>

                                <div>
                                    <button>
                                        <div className='text text1'>Reserve Now</div>
                                        <div className='text text2' aria-hidden={true}>Reserve Now</div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}
