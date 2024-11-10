import { Router } from "express";
import {
  createUserController, 
  deleteUserController, 
  getUsersController, 
  updateUserController 
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post('/create', createUserController);
userRouter.put('/update', updateUserController);
userRouter.get('/allUsers', getUsersController);
userRouter.delete('/delete', deleteUserController);

export { userRouter };