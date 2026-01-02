import mongoose from "mongoose";

export const connectDB = async ()=> {
  await mongoose.connect(process.env.DB_URL)
  .then(() => {console.log("DB connected",process.env.DB_URL)}).catch ((error)=>{
    console.error(" Database Connection Failed:", error.message);
    process.exit(1);
  })

}

