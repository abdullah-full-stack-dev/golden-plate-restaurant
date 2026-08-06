import newsLetterModel from "../models/newsletterModel.js";
import sendBrevoMail from "../utils/sendBrevoMail.js";

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

        // user mail
        await sendBrevoMail({
            to: email,
            subject: "Subscribed Successfully",
            htmlContent: `
              <h2>Thank You!</h2>
              <p>You have successfully subscribed to Golden Plate Restaurant.</p>
            `,
        });

        // owner mail
        await sendBrevoMail({
            to: process.env.SENDER_EMAIL,
            subject: "New Subscription",
            htmlContent: `
              <h2>New Subscriber</h2>
              <p>Email: ${email}</p>
            `,
        });


        res.send(
            {
                success: true,
                message: "Subscribed successfully.",
                subscription
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