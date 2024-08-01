import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://muthumeenakshi403:vms%401821@cluster0.wymivbc.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}

