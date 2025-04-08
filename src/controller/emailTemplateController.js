import { emailTemplateService } from '../service/emailTemplateService.js'; // Path to email template service
import catchAsync from '../shared/catchAsync.js'; // Error handling middleware
import sendResponse from '../shared/sendResponse.js'; // Utility for consistent response formatting
import httpStatus from 'http-status';

// Create a new email template entry
const createEmailTemplate = catchAsync(async (req, res) => {
  const emailTemplate = await emailTemplateService.createEmailTemplate(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Email template created successfully',
    data: emailTemplate,
  });
});

// Get all email templates
const getAllEmailTemplates = catchAsync(async (req, res) => {
  const emailTemplates = await emailTemplateService.getEmailTemplates();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Email templates fetched successfully',
    data: emailTemplates,
  });
});

// Get an email template by ID
const getEmailTemplateById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const emailTemplate = await emailTemplateService.getEmailTemplateById(id);
  sendResponse(res, {
    statusCode: emailTemplate
      ? httpStatus.OK
      : httpStatus.NOT_FOUND,
    success: !!emailTemplate,
    message: emailTemplate
      ? 'Email template fetched successfully'
      : 'Email template not found',
    data: emailTemplate || null,
  });
});

// Get an email template by name
const getEmailTemplateByName = catchAsync(async (req, res) => {
  const { name } = req.params;
  const emailTemplate = await emailTemplateService.getEmailTemplateByName(name);
  sendResponse(res, {
    statusCode: emailTemplate
      ? httpStatus.OK
      : httpStatus.NOT_FOUND,
    success: !!emailTemplate,
    message: emailTemplate
      ? 'Email template fetched successfully'
      : 'Email template not found',
    data: emailTemplate || null,
  });
});

// Update an email template by ID
const updateEmailTemplate = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updatedTemplate = await emailTemplateService.updateEmailTemplate(id, req.body);
  sendResponse(res, {
    statusCode: updatedTemplate
      ? httpStatus.OK
      : httpStatus.NOT_FOUND,
    success: !!updatedTemplate,
    message: updatedTemplate
      ? 'Email template updated successfully'
      : 'Email template not found or not updated',
    data: updatedTemplate || null,
  });
});

// Delete an email template by ID
const deleteEmailTemplate = catchAsync(async (req, res) => {
  const { id } = req.params;
  const isDeleted = await emailTemplateService.deleteEmailTemplate(id);
  sendResponse(res, {
    statusCode: isDeleted
      ? httpStatus.OK
      : httpStatus.NOT_FOUND,
    success: isDeleted,
    message: isDeleted
      ? 'Email template deleted successfully'
      : 'Email template not found',
    data: null,
  });
});

export const emailTemplateController = {
  createEmailTemplate,
  getAllEmailTemplates,
  getEmailTemplateById,
  getEmailTemplateByName,
  updateEmailTemplate,
  deleteEmailTemplate,
};
