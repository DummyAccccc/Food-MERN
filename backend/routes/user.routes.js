import { Router } from "express";
import { deleteUser, getUserById, getUsers, putUser, updateUser } from "../controllers/user.controller.js";
// import userRouter from "./restaurant.routes";
const userRouter = Router();

// userRouter.get('/api/users',getUsers)

userRouter.get('/', getUsers)
userRouter.get('/:id', getUserById)

userRouter.post('/', putUser)
userRouter.put('/:id', updateUser)
userRouter.delete('/:id', deleteUser)


export default userRouter;