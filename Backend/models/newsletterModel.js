import mongoose from "mongoose";

const newsLetterSchema = mongoose.Schema({
    email:{type:String, trim:true ,required:true}
})

const newsLetterModel = mongoose.models.newsLetter || mongoose.model("newsLetter", newsLetterSchema);
export default newsLetterModel;