import ApiError from '../error/handleApiError.js';
import httpStatus from 'http-status';
import Testimonial from '../model/testimonialModel.js';

// Create a new testimonial
const createTestimonial = async (testimonialData) => {
  const testimonial = await Testimonial.create(testimonialData);
  return testimonial;
};

// Get all testimonials
const getTestimonials = async () => {
  const testimonials = await Testimonial.findAll();
  return testimonials;
};

// Get testimonial by ID
const getTestimonialById = async (id) => {
  const testimonial = await Testimonial.findByPk(id);
  if (!testimonial) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Testimonial not found');
  }
  return testimonial;
};

// Update testimonial by ID
const updateTestimonial = async (id, testimonialData) => {
  const testimonial = await Testimonial.findByPk(id);
  if (!testimonial) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Testimonial not found');
  }

  const updatedTestimonial = await testimonial.update(testimonialData);
  return updatedTestimonial;
};

// Delete testimonial by ID
const deleteTestimonial = async (id) => {
  const testimonial = await Testimonial.findByPk(id);
  if (!testimonial) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Testimonial not found');
  }
  await testimonial.destroy();
  return true;
};

export const testimonialService = { 
  createTestimonial, 
  getTestimonials, 
  getTestimonialById, 
  updateTestimonial, 
  deleteTestimonial 
};
