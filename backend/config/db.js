require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/myDB', 
        {useNewUrlParser: true,
         useUnifiedTopology: true})
         .then(() => console.log('Connection success !'))
         .catch(() => console.log('Echec connection!!!'))
        /*await  mongoose.connectDB(process.env.MONGO-URI,{
            useNewUrlParse: true,
            useUnifiedTopology:true
        });
        console.log("MongoDB connected")*/
    } catch (error) {
        console.error("MongoDB not connected")
        process.exit(1);
    }
}
module.exports= connectDB;
