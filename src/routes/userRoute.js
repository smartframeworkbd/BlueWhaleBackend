import express from 'express';
import { userController } from '../controller/userController.js';

const userRoute = express.Router();
userRoute.post('/create', userController.createUser);
userRoute.post('/login', userController.LoginUser);
userRoute.post('/reset-code', userController.resetPassCode)
userRoute.get('/', userController.getUsers);
userRoute.get("/:id", userController.getUserById);
userRoute.patch("/:id", userController.updateUser);
userRoute.delete("/:id", userController.deleteUser);
userRoute.post("/change-pass-code",userController.changePassCode)

export default userRoute
