// import { footerService } from '../service/footerService.js';
import { footerService } from '../service/footerService.js';
import catchAsync from '../shared/catchAsync.js';
import sendResponse from '../shared/sendResponse.js';
import httpStatus from 'http-status';

// Create a new footer
const createFooter = catchAsync(async (req, res) => {
  const footer = await footerService.createFooter(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Footer created successfully',
    data: footer,
  });
});

// Get all footers
const getAllFooters = catchAsync(async (req, res) => {
  const footers = await footerService.getAllFooters();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Footers fetched successfully',
    data: footers,
  });
});

// Get footer by ID
const getFooterById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const footer = await footerService.getFooterById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Footer fetched successfully',
    data: footer,
  });
});

// Update footer
const updateFooter = catchAsync(async (req, res) => {
  const { id } = req.params;
  console.log(id,"hi dev");
  const updatedFooter = await footerService.updateFooter(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Footer updated successfully',
    data: updatedFooter,
  });
});

// Delete footer
const deleteFooter = catchAsync(async (req, res) => {
  const { id } = req.params;
  console.log(id,"hi dev");
  
  await footerService.deleteFooter(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Footer deleted successfully',
    data: null,
  });
});

export const footerController = {
  createFooter,
  getAllFooters,
  getFooterById,
  updateFooter,
  deleteFooter,
};
