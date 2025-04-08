import express from 'express';
import { adminController } from '../controller/adminController.js';
import authMiddleware from '../middleware/authMiddleware.js';


const adminRouter = express.Router();

adminRouter.post('/create', adminController.createAdmin);
adminRouter.get('/', adminController.getAdmin);
adminRouter.get('/:id', adminController.getAdminById);

adminRouter.patch("/:id", adminController.updateAdmin);

adminRouter.delete("/:id", adminController.deleteAdmin);
adminRouter.post("/login", adminController.LoginAdmin);
adminRouter.post("/reset-password", authMiddleware, adminController.resetPassword)

export default adminRouter;
