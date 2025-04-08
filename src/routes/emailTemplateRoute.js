import express from 'express';
import { emailTemplateController } from '../controller/emailTemplateController.js';

const emailTemplateRoute = express.Router();
emailTemplateRoute.post('/create', emailTemplateController.createEmailTemplate);

emailTemplateRoute.get('/', emailTemplateController.getAllEmailTemplates);
emailTemplateRoute.get("/:id", emailTemplateController.getEmailTemplateById);
emailTemplateRoute.patch("/:id", emailTemplateController.updateEmailTemplate);
emailTemplateRoute.delete("/:id", emailTemplateController.deleteEmailTemplate);

export default emailTemplateRoute
