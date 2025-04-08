import catchAsync from '../shared/catchAsync.js';
import sendResponse from '../shared/sendResponse.js';
import httpStatus from 'http-status';
import { testimonialService } from '../service/testimonialService.js';
import ApiError from '../error/handleApiError.js';

// Create a new Testimonial
const createTestimonial = catchAsync(async (req, res, next) => {
  const testimonial = await testimonialService.createTestimonial(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Testimonial created successfully',
    data: testimonial,
  });
});

// Get all Testimonials
const getTestimonials = catchAsync(async (req, res, next) => {
  const testimonials = await testimonialService.getTestimonials();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Testimonials retrieved successfully',
    data: testimonials,
  });
});

// Get Testimonial by ID
const getTestimonialById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const testimonial = await testimonialService.getTestimonialById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Testimonial retrieved successfully',
    data: testimonial,
  });
});

// Update Testimonial by ID
const updateTestimonial = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const updatedTestimonial = await testimonialService.updateTestimonial(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Testimonial updated successfully',
    data: updatedTestimonial,
  });
});

// Delete Testimonial by ID
const deleteTestimonial = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  await testimonialService.deleteTestimonial(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Testimonial deleted successfully',
    data: null,
  });
});

export const testimonialController = { 
  createTestimonial, 
  getTestimonials, 
  getTestimonialById, 
  updateTestimonial, 
  deleteTestimonial 
};
