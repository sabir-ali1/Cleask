const mongoose = require("mongoose");

const URL = process.env.mongo_url;

const connectDb = async () => {
    try {
        await mongoose.connect(URL);
        console.log("database is connected successfull");
    } catch (error) {
        console.log("db is not connected");
    }
}

module.exports = connectDb;