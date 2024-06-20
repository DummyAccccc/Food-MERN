import { Router } from "express";
import { createRestaurant, deleteRestaurant, getOneRestaurant, getRestaurant, updateRestaurant } from "../controllers/restaurant.controller.js";

const restaurantRouter = Router();


restaurantRouter.get('/', getRestaurant)

<<<<<<< HEAD
restaurantRouter.get(':/id', getOneRestaurant)
=======
restaurantRouter.get('/:id', getOneRestaurant)
>>>>>>> 61bf20b91e0265839d1e145cb3287e870b9d7055

restaurantRouter.post('/', createRestaurant)

restaurantRouter.put('/:id', updateRestaurant)

restaurantRouter.delete('/:id', deleteRestaurant)


export default restaurantRouter;