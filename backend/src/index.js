import express from 'express';
import cors from 'cors';
import { MONGODB_CONNECTION_URL, PORT } from '../constants/index.constants.js';
import mongoose from 'mongoose';
import { Restaurant } from '../models/restaurants.model.js';

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


app.get('/api/restaurant', async (req, res) => {
    try {
        const allRestaurants = await Restaurant.find({});
        if (!allRestaurants) return res.status(400).send("Restaurant Not found...");

        return res.status(200).json(allRestaurants)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
})

app.get('/api/restaurant/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const restaurant = await Restaurant.findById(id);
        if (!restaurant) return res.status(400).send("Restaurant Not found...");

        return res.status(200).json(restaurant)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
})

app.post('/api/restaurant', async (req, res) => {
    try {
        const { body } = req;
        const newRestaurant = await Restaurant.create(body);
        if (!restaurant) return res.status(400).send("Restaurant Not added...");

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }

})

