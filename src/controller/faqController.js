import catchAsync from '../shared/catchAsync.js';
import sendResponse from '../shared/sendResponse.js';
import httpStatus from 'http-status';
import { faqService } from '../service/faqService.js';
import ApiError from '../error/handleApiError.js';

// Create a new FAQ
const createFaq = catchAsync(async (req, res, next) => {

  const faq = await faqService.createFaq(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'FAQ created successfully',
    data: faq,
  });
});

// Get all FAQs
const getFaqs = catchAsync(async (req, res, next) => {
  const faqs = await faqService.getFaqs();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'FAQs retrieved successfully',
    data: faqs,
  });
});

// Get FAQ by ID
const getFaqById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const faq = await faqService.getFaqById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'FAQ retrieved successfully',
    data: faq,
  });
});

// Update FAQ by ID
const updateFaq = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  // const { question, answer, status, order } = req.body;

  const updatedFaq = await faqService.updateFaq(id,req.body );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'FAQ updated successfully',
    data: updatedFaq,
  });
});

// Delete FAQ by ID
const deleteFaq = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  await faqService.deleteFaq(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'FAQ deleted successfully',
    data: null,
  });
});

export const faqController = { createFaq, getFaqs, getFaqById, updateFaq, deleteFaq };
