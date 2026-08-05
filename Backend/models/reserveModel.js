import mongoose from "mongoose";

const reserveSchema = new mongoose.Schema({
    email:{type:String, trim:true ,required:true},
    name:{type:String, trim:true ,required:true},
    phone:{type:String, trim:true , required:true},
    persons:{type:Number , required:true},
    date:{type:Date , required:true},
    time:{type:String , required:true},
    message:{type:String, default:""}
})

const reserveModel = mongoose.models.reserve || mongoose.model("reserve", reserveSchema);
export default reserveModel;