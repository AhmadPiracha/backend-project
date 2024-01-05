// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import app from "./app.js";

dotenv.config({ path: "./env" });

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    }
    ).catch((error) => {
        console.log("Connection error: ", error);
        process.exit(1);
    });


/*
import express from express;
const app = express();
( async ()=>{
    try {
      await  mongoose.connect(`{process.env.MONGO_URI}/${DB_NAME}`)
      app.on("error",()=>{
            console.log("Error: ",error)
            throw error;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.log("Error: ",error)
        throw error;
    }

})()
*/