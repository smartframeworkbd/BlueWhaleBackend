
import express from 'express';
import { breakingNewsController } from '../controller/breakingNewsController.js';

const breakingNewsRoute = express.Router();
breakingNewsRoute.post('/create', breakingNewsController.createBreakingNews);

breakingNewsRoute.get('/', breakingNewsController.getAllBreakingNews);
breakingNewsRoute.get("/:id", breakingNewsController.getBreakingNewsById);
breakingNewsRoute.patch("/:id", breakingNewsController.updateBreakingNews);
breakingNewsRoute.delete("/:id", breakingNewsController.deleteBreakingNews);

export default breakingNewsRoute
