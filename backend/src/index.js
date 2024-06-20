import express, { request, response } from 'express';
import cors from 'cors';
import { MONGODB_CONNECTION_URL, PORT } from '../constants/index.constants.js';
import mongoose from 'mongoose';
import restaurantRouter from '../routes/restaurant.routes.js';
import userRouter from '../routes/user.routes.js';
import orderRouter from '../routes/order.routes.js';
const app = express();

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use('/api/users', userRouter)
app.use('/api/restaurant', restaurantRouter)
app.use('/api/orders',orderRouter)


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
