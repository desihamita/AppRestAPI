const mongoose = require('mongoose');

const URI = "mongodb+srv://restapi-applications:<password>@cluster0.oozau.mongodb.net/<dbname>?retryWrites=true&w=majority"

const connectDB = async () => {
    await mongoose.connect(URI, { 
        useUnifiedTopology: true,
        useNewUrlParser: true 
    });
    console.log('Database connected...')
}

module.exports = connectDB;