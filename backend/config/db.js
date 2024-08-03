import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://jaishreekannan3107:Yxs8QHy51EuZ0klM@cluster0.wymivbc.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}

