import React, { useState } from 'react'
import '../CSS/Contact.css'
import line from "../assets/images/line2.png"
import { SubTitle } from '../components/SubTitle'
import { MdMailOutline } from 'react-icons/md'
import { BsPatchQuestion } from 'react-icons/bs'
import { FiMessageCircle } from 'react-icons/fi'
import { LuUser } from 'react-icons/lu'
import { RestaurantMap } from '../components/RestaurantMap'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const Contact = () => {

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
    setLoading(true);

    try {
      const res = await axios.post("https://golden-plate-restaurant.onrender.com/api/gp/contact", formData)

      console.log(res.data);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      toast.success("Form Submitted Successfully!")
      navigate("/")
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }

  };

  return (
    <>
      {loading && (
        <div className="page-loader">
          <div className="page-loader-spinner"></div>
        </div>
      )}

      <div className='Contact-section'>
        <div className="Contact-cont">
          <SubTitle text={"Contact Us"} />
          <p><span className='nom'>Whether you're planning a romantic dinner, a family gathering, or a private celebration, our team is here to make every moment memorable.</span> <br />Reach out to us for reservations, inquiries, or special requests—we'd love to welcome you to The Golden Plate.</p>
          <div className="contact-details-cont">

            <div className='contact-details'>
              <h1>Visit Us</h1>
              <p>Golden Plate Restaurant, <br />Mumbai 2487, India</p>
            </div>
            <div className='contact-details'>
              <h1>Booking Request</h1>
              <p>+91 896 857 8990 / <br />booking@gp.com</p>
            </div>
            <div className='contact-details'>
              <h1>Opening Hours</h1>
              <p>Monday – Sunday</p>
              <p>10:00 AM – 10:00 PM</p>
            </div>

          </div>

          <div style={{ display: "flex", justifyContent: "center", margin: "30px 0" }}>
            <img src={line} alt="line" width={150} />
          </div>

          <div className='enquiry-form-cont'>
            <p>For general enquiries please email: <span>info@goldenplate.com</span></p>

            <div className='enquiry-form'>
              <form onSubmit={handleSubmit}>

                <h1>Get In Touch</h1>
                <div className='enquiry-form-input'>
                  <LuUser color='#f8f8f8' className='enquiry-form-icon' />
                  <input type="text" placeholder='Your name' name='name' onChange={handleChange} value={formData.name} required />
                </div>
                <div className='enquiry-form-input'>
                  <MdMailOutline color='#f8f8f8' className='enquiry-form-icon' />
                  <input type="email" placeholder='Your email' name='email' onChange={handleChange} value={formData.email} required />
                </div>
                <div className='enquiry-form-input'>
                  <BsPatchQuestion color='#f8f8f8' className='enquiry-form-icon' />
                  <input type="text" placeholder='Subject' name='subject' onChange={handleChange} value={formData.subject} required />
                </div>
                <div className='enquiry-form-input'>
                  <FiMessageCircle color='#f8f8f8' className='enquiry-form-icon' />
                  <textarea placeholder='Message' name='message' onChange={handleChange} value={formData.message} required />
                </div>
                <button>
                  <div className='text text1'>Send Message</div>
                  <div className='text text2' aria-hidden={true}>Send Message</div>
                </button>

              </form>
            </div>
          </div>

          <RestaurantMap />

        </div>
      </div>
    </>
  )
}
