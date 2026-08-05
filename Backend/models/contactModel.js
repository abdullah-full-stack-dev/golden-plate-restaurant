import mongoose from "mongoose";

const contactScehma = mongoose.Schema({
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    subject: { type: String, trim: true, required: true },
    message: { type: String, trim: true, required: true }
})

const contactModel = mongoose.models.contact || mongoose.model("contact", contactScehma)
export default contactModel;