import { Router } from "express";
import { deleteOrder, getOrderById, getOrders, putorder, updateOrder } from "../controllers/order.controller.js";

const orderRouter=Router()


orderRouter.get('/',getOrders)
orderRouter.get('/:id',getOrderById)
orderRouter.post('/', putorder)
orderRouter.put('/:id',updateOrder)
orderRouter.delete('/:id',deleteOrder)

export default orderRouter