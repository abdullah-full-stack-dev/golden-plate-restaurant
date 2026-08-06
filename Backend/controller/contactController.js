import contactModel from '../models/contactModel.js';
import sendBrevoMail from '../utils/sendBrevoMail.js';

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

        // user mail
        await sendBrevoMail({
            to: email,
            subject: "We've Received Your Message",
            htmlContent: `
              <h2>Thank You, ${name}</h2>
              <p>We have received your message.</p>
            `,
        });

        //owner mail
        await sendBrevoMail({
            to: process.env.SENDER_EMAIL,
            subject: "New Contact Message",
            htmlContent: `
              <h2>New Contact</h2>
          
              <p><b>Name:</b> ${name}</p>
              <p><b>Email:</b> ${email}</p>
              <p><b>Subject:</b> ${subject}</p>
              <p><b>Message:</b> ${message}</p>
            `,
        });

        res.send(
            {
                success: true,
                message: "Your enquiry has been submitted successfully!.",
                contact
            }
        )


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