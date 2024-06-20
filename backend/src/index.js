import express from 'express';
import cors from 'cors';
import { MONGODB_CONNECTION_URL, PORT } from '../constants/index.constants.js';
import mongoose from 'mongoose';

const app = express();

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }));


app.listen(PORT, () => {
    console.log(`server is running on port - ${PORT}`);
})

//users api


mongoose.connect(MONGODB_CONNECTION_URL)
    .then(() => {
        console.log("connected to db...")
    })
    .catch(() => {
        console.log("connection failed...")
    })
