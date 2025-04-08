import ApiError from '../error/handleApiError.js';
import httpStatus from 'http-status';
import EmailTemplateModel from '../model/emailTemplateModel.js';
// import EmailTemplateModel from '../model/EmailTemplateModel.js';

// Create a new email template
const createEmailTemplate = async (templateData) => {
  const template = await EmailTemplateModel.create(templateData);
  return template;
};

// Get all email templates
const getEmailTemplates = async () => {
  const templates = await EmailTemplateModel.findAll();
  return templates;
};

// Get email template by ID
const getEmailTemplateById = async (id) => {
  const template = await EmailTemplateModel.findByPk(id);
  if (!template) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Email template not found');
  }
  return template;
};

// Update email template by ID
const updateEmailTemplate = async (id, updateData) => {
  const result = await EmailTemplateModel.update(updateData, {
    where: { id },
  });

  if (result[0] === 0) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Email template not found or no changes applied');
  }

  return true;
};

// Delete email template by ID
const deleteEmailTemplate = async (id) => {
  const template = await EmailTemplateModel.findByPk(id);
  if (!template) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Email template not found');
  }
  await template.destroy();
  return true;
};

// Get email template by name
const getEmailTemplateByName = async (name) => {
  const template = await EmailTemplateModel.findOne({
    where: { name },
  });

  if (!template) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Email template not found');
  }

  return template;
};

// Get all active email templates
const getActiveEmailTemplates = async () => {
  const templates = await EmailTemplateModel.findAll({
    where: { isActive: true },
  });

  if (!templates.length) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No active email templates found');
  }

  return templates;
};

export const emailTemplateService = {
  createEmailTemplate,
  getEmailTemplates,
  getEmailTemplateById,
  updateEmailTemplate,
  deleteEmailTemplate,
  getEmailTemplateByName,
  getActiveEmailTemplates,
};
