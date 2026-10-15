import { Router } from "express";
import * as userController from './user.controller'

const userRouter = Router();

userRouter.post("/auth/register", userController.createUserController);
userRouter.post("/auth/login", userController.loginUserController);

export default userRouter;
