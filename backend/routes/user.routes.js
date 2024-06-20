import { Router } from "express";
// import userRouter from "./restaurant.routes";
import { getUsers, getUserById, putUser, updateUser, deleteUser } from "../controllers/user.controller";
const userRouter = Router();

// userRouter.get('/api/users',getUsers)

userRouter.get('/', getUsers)
userRouter.get('/:id', getUserById)
userRouter.post('/', putUser)
userRouter.put('/:id', updateUser)
userRouter.delete('/:id', deleteUser)


export default userRouter;