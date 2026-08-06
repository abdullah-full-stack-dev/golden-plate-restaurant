import axios from "axios";

const sendBrevoMail = async ({
    to,
    subject,
    htmlContent,
}) => {
    try {
        await axios.post(
            "https://api.brevo.com/v3/smtp/email",
            {
                sender: {
                    name: "Golden Plate Restaurant",
                    email: process.env.SENDER_EMAIL,
                },
                to: [{ email: to }],
                subject,
                htmlContent,
            },
            {
                headers: {
                    "api-key": process.env.BREVO_API_KEY,
                    "Content-Type": "application/json",
                },
            }
        );
    } catch (error) {
        console.error(
            "Brevo Error:",
            error.response?.data || error.message
        );
        throw error;
    }
};

export default sendBrevoMail;