import reserveModel from "../models/reserveModel.js";
import sendBrevoMail from "../utils/sendBrevoMail.js";

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

        //user mail
        await sendBrevoMail({
            to: email,
            subject: "Reservation Confirmed",
            htmlContent: `
              <h2>Hello ${name}</h2>
          
              <p>Your reservation request has been received.</p>
          
              <ul>
                <li>Date: ${date}</li>
                <li>Time: ${time}</li>
                <li>Guests: ${persons}</li>
              </ul>
          
              <p>We look forward to serving you!</p>
            `,
          });

          // owner mail
          await sendBrevoMail({
            to: process.env.SENDER_EMAIL,
            subject: "New Reservation",
            htmlContent: `
              <h2>New Reservation</h2>
          
              <p><b>Name:</b> ${name}</p>
              <p><b>Email:</b> ${email}</p>
              <p><b>Phone:</b> ${phone}</p>
              <p><b>Date:</b> ${date}</p>
              <p><b>Time:</b> ${time}</p>
              <p><b>Guests:</b> ${persons}</p>
              <p><b>Message:</b> ${message}</p>
            `,
          });

        res.send(
            {
                success: true,
                message: "Reservation booked successfully.",
                reservation
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