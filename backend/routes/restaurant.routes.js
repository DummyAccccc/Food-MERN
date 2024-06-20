import { Router } from "express";
import { Restaurant } from "../models/restaurants.model.js";
import { createRestaurant, deleteRestaurant, getOneRestaurant, getRestaurant, updateRestaurant } from "../controllers/restaurant.controller.js";

const app = Router();


app.get('/api/restaurant', getRestaurant)

app.get('/api/restaurant/:id', getOneRestaurant)

app.post('/api/restaurant', createRestaurant)

app.put('/api/restaurant/:id', updateRestaurant)

app.delete('/api/restaurant/:id', deleteRestaurant)
