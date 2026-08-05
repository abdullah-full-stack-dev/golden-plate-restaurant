import React from 'react'
import '../CSS/Policy.css'

export const Policy = () => {
  return (
    <div className='Policy-section'>
      <h1>Privacy Policy</h1>
      <p>Welcome to The Golden Plate. Your privacy is important to us. <br />This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services.</p>
      <div className="policy-cont">
        <h2>1. Information We Collect</h2>
        <p>We may collect the following information:</p>
        <ul>
          <li>Full Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Reservation Details (Date, Time, Number of Guests)</li>
          <li>Messages or Special Requests</li>
        </ul>
      </div>

      <div className="policy-cont">
        <h2>2. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Confirm and manage table reservations</li>
          <li>Respond to your inquiries</li>
          <li>Improve our website and customer experience</li>
          <li>Send reservation confirmations or updates</li>
          <li>Comply with legal obligations</li>
        </ul>
      </div>

      <div className="policy-cont">
        <h2>3. Cookies</h2>
        <p>Our website may use cookies to improve functionality and analyze website traffic. <br />You can disable cookies through your browser settings if you prefer.</p>
      </div>
      <div className="policy-cont">
        <h2>4. Data Protection</h2>
        <p>We implement reasonable security measures to protect your personal information against unauthorized access, misuse, or disclosure.</p>
      </div>

      <div className="policy-cont">
        <h2>5. Contact Us</h2>
        <p>If you have any questions regarding this Privacy Policy, please contact us:</p>
        <p>The Golden Plate</p>
        <p>Email: <span>info@thegoldenplate.com</span></p>
        <p>Phone: <span>+91 896 857 8990</span></p>
      </div>
    </div>
  )
}
