import express from 'express';
import { footerController } from '../controller/footerController.js';
// import { userController } from '../controller/userController.js';
// import { grievanceController } from '../controller/grievanceController.js';
// import upload from '../shared/upload.js';

const footerRoute = express.Router();
footerRoute.post('/create', footerController.createFooter);

footerRoute.get('/', footerController.getAllFooters);
footerRoute.get("/:id", footerController.getFooterById);
// footerRoute.get("/user/:userId", footerController.getGrievancesByUserId);
footerRoute.patch("/:id", footerController.updateFooter);
footerRoute.delete("/:id", footerController.deleteFooter);

export default footerRoute
