import express, { request, response } from 'express';
import cors from 'cors';
import { MONGODB_CONNECTION_URL, PORT } from '../constants/index.constants.js';
import mongoose from 'mongoose';
import { Restaurant } from '../models/restaurants.model.js';
import { User } from '../models/users.model.js';

const app = express();

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }));


app.listen(PORT, () => {
    console.log(`server is running on port - ${PORT}`);
})

//users api
app.get('/api/users', async (request, response) => {
    try {
        const users = await User.find({})
        response.status(200).json(users)
    } catch (error) {
        response.status(401).json({ msg: error.message })

    }
})

app.get('/api/users/:id', async (request, response) => {
    try {
        const { id } = request.params
        const user = await User.findById(id)
        const { type, email, password, address, city, country } = user
        if (!user) {
            response.status(404).json({ msg: 'user not found' })
        }
        // response.json(product)
        response.send({ type: type, email: email, password: password, address: address, city: city, country: country })
    } catch (error) {
        response.status(401).json({ msg: error.message })

    }
})

app.post('/api/users', async (request, response) => {
    try {
        // const localFilePath = request.file.path
        const { type, email, password, address, city, country } = request.body

        // const uploadResult = await uploadOnCloudinary(localFilePath)

        // if (!uploadResult) {
        //     return response.status(500).json({ msg: 'File upload to Cloudinary failed' });
        // }
        // fs.unlinkSync(localFilePath)
        const user = new User({
            type, email, password, address, city, country,
            // image: uploadResult.url //save cloudinary url
        })

        await user.save()

        response.status(200).json(user)
    } catch (error) {
        response.status(500).json({ msg: "hello there" })
    }
})

app.put('/api/users/:id', async (request, response) => {
    try {
        // const fileLocalPath = request.file.path;
        // const result = await uploadOnCloudinary(fileLocalPath);
        // if (!result) {
        //     return response.status(500).json({ msg: 'File upload to Cloudinary failed' });
        // }
        // const imgurl = result.url;

        const { id } = request.params;
        const user = await User.findByIdAndUpdate(id, request.body , { new: true });
        if (!user) return response.status(404).send({ msg: "user not found" });
        response.status(200).json(user);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
})

app.delete('/api/users/:id',async(request,response)=>{
    try {
        const { id } = request.params
        const user = await User.findByIdAndDelete(id)
        if (!user) return response.status(400).send({ msg: "user not found" })

        response.status(200).send({ msg: "user deleted successfully" })
    } catch (error) {
        response.status(401).json({ msg: error.message })

    }
})




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

