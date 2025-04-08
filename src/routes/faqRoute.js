import express from 'express';
import { faqController } from '../controller/faqController.js';

const faqRoute = express.Router();
faqRoute.post('/create', faqController.createFaq);

faqRoute.get('/', faqController.getFaqs);
faqRoute.get("/:id", faqController.getFaqById);
faqRoute.patch("/:id", faqController.updateFaq);
faqRoute.delete("/:id", faqController.deleteFaq);

export default faqRoute
