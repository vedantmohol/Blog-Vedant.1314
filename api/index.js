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
