import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';

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

app.use('/api/user',userRoutes)
