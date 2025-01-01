import mongoose from "mongoose";

export const  connectDB = async () =>{
    const password= process.env.DB_PASSWORD
    //console.log(password)
    await mongoose.connect(`mongodb+srv://jaind3273:${password}@foodbites.rvlxi.mongodb.net/?retryWrites=true&w=majority&appName=FoodBites`).then(()=>console.log("DB Connected"));
    console.log("DB connected successfully");
}


