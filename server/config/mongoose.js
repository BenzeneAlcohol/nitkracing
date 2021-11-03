const mongoose = require('mongoose');

const connectDB = async() => {
    console.log("connecting to db");
    const dbName = 'test';
    await mongoose.connect(
        `mongodb+srv://nitkr-admin:nitktestdb1234@nitkracing.iv647.mongodb.net/${dbName}?retryWrites=true&w=majority`, 
    );
    console.log("MongoDB connected");
}

module.exports = connectDB;