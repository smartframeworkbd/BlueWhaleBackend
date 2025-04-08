
import ApiError from '../error/handleApiError.js';
import httpStatus from 'http-status';
import FaqModel from '../model/FaqModel.js';

const createFaq = async (faqData) => {
  const faq = await FaqModel.create(faqData);
  return faq;
};

const getFaqs = async () => {
  const faqs = await FaqModel.findAll();
  return faqs;
};

const getFaqById = async (id) => {
  const faq = await FaqModel.findByPk(id);
  if (!faq) {
    throw new ApiError(httpStatus.NOT_FOUND, 'FAQ not found');
  }
  return faq;
};

const updateFaq = async (id, faqData) => {
  const faq = await FaqModel.findByPk(id);
  if (!faq) {
    throw new ApiError(httpStatus.NOT_FOUND, 'FAQ not found');
  }
  console.log(faqData);
  
  const updatedFaq = await faq.update(faqData);
  console.log(updateFaq);
  
  return updatedFaq;
};

const deleteFaq = async (id) => {
  const faq = await FaqModel.findByPk(id);
  if (!faq) {
    throw new ApiError(httpStatus.NOT_FOUND, 'FAQ not found');
  }
  await faq.destroy();
  return true;
};

export const faqService = { createFaq, getFaqs, getFaqById, updateFaq, deleteFaq };
