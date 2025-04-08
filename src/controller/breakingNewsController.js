import { breakingNewsService } from '../service/breakingNewsService.js';
import catchAsync from '../shared/catchAsync.js';
import sendResponse from '../shared/sendResponse.js';
import httpStatus from 'http-status';
// import { breakingNewsService } from '../service/breakingNewsService.js';

// Create a new breaking news
const createBreakingNews = catchAsync(async (req, res) => {
  const breakingNews = await breakingNewsService.createBreakingNews(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Breaking news created successfully',
    data: breakingNews,
  });
});

// Get all breaking news
const getAllBreakingNews = catchAsync(async (req, res) => {
  const breakingNews = await breakingNewsService.getAllBreakingNews();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Breaking news fetched successfully',
    data: breakingNews,
  });
});

// Get breaking news by ID
const getBreakingNewsById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const breakingNews = await breakingNewsService.getBreakingNewsById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Breaking news fetched successfully',
    data: breakingNews,
  });
});

// Update breaking news
const updateBreakingNews = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updatedBreakingNews = await breakingNewsService.updateBreakingNews(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Breaking news updated successfully',
    data: updatedBreakingNews,
  });
});

// Delete breaking news
const deleteBreakingNews = catchAsync(async (req, res) => {
  const { id } = req.params;
  await breakingNewsService.deleteBreakingNews(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Breaking news deleted successfully',
    data: null,
  });
});

export const breakingNewsController = {
  createBreakingNews,
  getAllBreakingNews,
  getBreakingNewsById,
  updateBreakingNews,
  deleteBreakingNews,
};
