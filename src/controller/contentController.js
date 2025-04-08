import catchAsync from '../shared/catchAsync.js';
import sendResponse from '../shared/sendResponse.js';
import httpStatus from 'http-status';
// import { contentService } from '../service/contentService.js';
import ApiError from '../error/handleApiError.js';
import { contentService } from '../service/contentService.js';

// Create a new content entry
const createContent = catchAsync(async (req, res, next) => {
  const content = await contentService.createContent(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Content created successfully',
    data: content,
  });
});

// Get all content entries
const getContents = catchAsync(async (req, res, next) => {
  const contents = await contentService.getContents();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Contents retrieved successfully',
    data: contents,
  });
});

// Get content by ID
const getContentById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const content = await contentService.getContentById(id);

  if (!content) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Content not found');
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Content retrieved successfully',
    data: content,
  });
});

// Update content by ID
const updateContent = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const updatedContent = await contentService.updateContent(id, req.body);

  console.log(updatedContent);


  if (!updatedContent) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Content not found');
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Content updated successfully',
    data: updatedContent,
  });
});

// Delete content by ID
const deleteContent = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const deletedContent = await contentService.deleteContent(id);

  if (!deletedContent) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Content not found');
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Content deleted successfully',
    data: null,
  });
});

const getContentBySlug = catchAsync(async (req, res, next) => {
  const { slug } = req.params;
  const result = await contentService.getContentBySlug(slug);

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Content not found');
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Content fetched successfully',
    data: result,
  });
});


const getContentMenu = catchAsync(async (req, res, next) => {
  // const { slug } = req.params;
  console.log("menu hit");
  
  const result = await contentService.getContentMenu();

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Content not found');
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Content fetched successfully',
    data: result,
  });
});

export const contentController = {
  createContent,
  getContents,
  getContentById,
  updateContent,
  deleteContent,

  getContentBySlug,
  getContentMenu
};
