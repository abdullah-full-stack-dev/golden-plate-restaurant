import transporter from '../config/nodemailer.js';
import contactModel from '../models/contactModel.js';

export const contactUs = async (req, res) => {
    try {

        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.send(
                {
                    success: false,
                    message: "Please fill out all required fields.",
                }
            )
        }

        const contact = await contactModel.create({
            name,
            email,
            subject,
            message
        })

        res.send(
            {
                success: true,
                message: "Your enquiry has been submitted successfully!.",
                contact
            }
        )

        // sending mail to customer
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: "Enquiry Received successfully.",
            text: `Hey ${email}, Thank you for contacting,
            we will reach out you soon...
            - The Golden Plate Restaurant
            `
        }

        // sending mail to owner 
        const mailOptions2 = {
            from: process.env.SENDER_EMAIL,
            to: process.env.SENDER_EMAIL,
            subject: "New Enquiry Received",

            html: `
        <h2>New Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b> ${message}</p>
        
    `
        }

        await transporter.sendMail(mailOptions)
        await transporter.sendMail(mailOptions2)


    } catch (error) {
        console.log(error);

        res.send(
            {
                success: false,
                message: "Server Error.",
            }
        )
    }
}