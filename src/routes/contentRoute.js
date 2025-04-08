import express from 'express';
import { contentController } from '../controller/contentController.js';
// import { faqController } from '../controller/faqController.js';

const contentRoute = express.Router();
contentRoute.post('/create', contentController.createContent);

contentRoute.get('/', contentController.getContents);
contentRoute.get("/single/:id", contentController.getContentById);
contentRoute.patch("/:id", contentController.updateContent);
contentRoute.delete("/:id", contentController.deleteContent);
contentRoute.get('/slug/:slug',contentController.getContentBySlug);
contentRoute.get('/menu',contentController.getContentMenu)

export default contentRoute
