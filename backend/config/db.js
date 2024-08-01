import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://eager9797:HackHive123@cluster0.zwwp6hn.mongodb.net/FoodDelivery').then(()=>console.log("DB Connected"));
}

