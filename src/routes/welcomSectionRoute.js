
import express from 'express';
import { welcomeSectionController } from '../controller/welcomeSectionController.js';
// import { breakingNewsController } from '../controller/breakingNewsController.js';

const welcomeSectionRoute = express.Router();
welcomeSectionRoute.post('/create', welcomeSectionController.createWelcomeSection);

welcomeSectionRoute.get('/', welcomeSectionController.getAllWelcomeSections);
welcomeSectionRoute.get("/:id", welcomeSectionController.getWelcomeSectionById);
welcomeSectionRoute.patch("/:id", welcomeSectionController.updateWelcomeSection);
welcomeSectionRoute.delete("/:id", welcomeSectionController.deleteWelcomeSection);

export default welcomeSectionRoute
