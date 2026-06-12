const mongoose = require("mongoose");

async function connectDB(){
    
        await mongoose.connect("mongodb+srv://backend:cOj9FXN8wxoGln5X@yt-backend.2a13raa.mongodb.net/dbBackend");

        console.log("connected to database");
};
module.exports = connectDB;