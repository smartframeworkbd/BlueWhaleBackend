import express from 'express';
import { bannerController } from '../controller/bannerController.js';

const bannerRouter = express.Router();

bannerRouter.post('/', bannerController.createBanner);
bannerRouter.get('/', bannerController.getBanners);
bannerRouter.get('/:id', bannerController.getBannerById);
bannerRouter.put('/:id', bannerController.updateBanner);
bannerRouter.delete('/:id', bannerController.deleteBanner);

export default bannerRouter;
