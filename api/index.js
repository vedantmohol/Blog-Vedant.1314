import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.mongodb_url)
.then(()=>{
    console.log('MongoDb is connected')
})
.catch((err)=>{
    console.log(err)
});

const app = express();

app.listen(3000,()=>{
    console.log("Server is running on server 3000!")
});
//@Krsna18
//mongodb+srv://vedantmohol18:@Krsna18@blog-vedant1314.uutd2.mongodb.net/?retryWrites=true&w=majority&appName=Blog-Vedant1314
//mongodb+srv://vedantmohol18:@Krsna18@blog-vedant1314.uutd2.mongodb.net/?retryWrites=true&w=majority&appName=Blog-Vedant1314