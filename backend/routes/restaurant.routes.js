import { Router } from "express";
import { createRestaurant, deleteRestaurant, getOneRestaurant, getRestaurant, updateRestaurant } from "../controllers/restaurant.controller.js";

const userRouter = Router();


userRouter.get('/api/restaurant', getRestaurant)

userRouter.get('/api/restaurant/:id', getOneRestaurant)

userRouter.post('/api/restaurant', createRestaurant)

userRouter.put('/api/restaurant/:id', updateRestaurant)

userRouter.delete('/api/restaurant/:id', deleteRestaurant)


export default userRouter;