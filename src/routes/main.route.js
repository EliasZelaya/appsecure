import { Router } from "express";
import { userRouter } from "./user.route.js";

const mainRouter = Router();

mainRouter.use('/user', userRouter);

export { mainRouter };