import reserveModel from "../models/reserveModel.js";
import transporter from '../config/nodemailer.js'

export const createReservation = async (req, res) => {
    try {
        const { email, name, phone, persons, date, time, message } = req.body;

        if (!email || !name || !phone || !persons || !date || !time) {
            return res.send(
                {
                    success: false,
                    message: "Please fill all required fields.",
                }
            )
        }

        const reservation = await reserveModel.create({
            email,
            name,
            phone,
            persons,
            date,
            time,
            message
        })


        res.send(
            {
                success: true,
                message: "Reservation booked successfully.",
                reservation
            }
        )

        // sending mail to customer
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: "Reservation booked successfully.",
            text: `Hey ${email}, your booking is successfull on ${date} at ${time}.
            - The Golden Plate Restaurant
            `
        }

        // sending mail to owner 
        const mailOptions2 = {
            from: process.env.SENDER_EMAIL,
            to: process.env.SENDER_EMAIL,
            subject: "New Reservation Received",

            html: `
        <h2>New Reservation</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Guests:</b> ${persons}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Time:</b> ${time}</p>
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