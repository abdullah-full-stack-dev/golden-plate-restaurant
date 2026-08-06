import transporter from '../config/nodemailer.js';
import newsLetterModel from "../models/newsletterModel.js";

export const createSubscription = async (req, res) => {
    try {

        const { email } = req.body;

        if (!email) {
            return res.send(
                {
                    success: false,
                    message: "Please fill required field.",
                }
            )
        }

        const subscription = await newsLetterModel.create({
            email
        })

        // transporter.verify((error, success) => {
        //     if (error) {
        //         console.log("SMTP ERROR:", error);
        //     } else {
        //         console.log("SMTP READY");
        //     }
        // });


        // sending mail to customer
        // const mailOptions = {
        //     from: process.env.SENDER_EMAIL,
        //     to: email,
        //     subject: "Subscribed successfully.",
        //     text: `Hey ${email}, Thank you for subscription.
        //     - The Golden Plate Restaurant
        //     `
        // }

        // sending mail to owner 
    //     const mailOptions2 = {
    //         from: process.env.SENDER_EMAIL,
    //         to: process.env.SENDER_EMAIL,
    //         subject: "New Subscription Received",

    //         html: `
    //     <h2>New Subscription</h2>
    //     <p><b>Email:</b> ${email}</p>
        
    // `
    //     }

    //     await transporter.sendMail(mailOptions)
    //     await transporter.sendMail(mailOptions2)

        res.send(
            {
                success: true,
                message: "Subscribed successfully.",
                subscription
            }
        )

        // console.log("Mail sent:", info.response);

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