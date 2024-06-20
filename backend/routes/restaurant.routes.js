import { Router } from "express";
import { createRestaurant, deleteRestaurant, getOneRestaurant, getRestaurant, updateRestaurant } from "../controllers/restaurant.controller.js";

const restaurantRouter = Router();


restaurantRouter.get('/', getRestaurant)

restaurantRouter.get(':/id', getOneRestaurant)

restaurantRouter.post('/', createRestaurant)

restaurantRouter.put('/:id', updateRestaurant)

restaurantRouter.delete('/:id', deleteRestaurant)


export default restaurantRouter;