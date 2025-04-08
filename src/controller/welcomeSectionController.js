import { welcomeSectionService } from '../service/welcomeSectionService.js';
import catchAsync from '../shared/catchAsync.js';
import sendResponse from '../shared/sendResponse.js';
import httpStatus from 'http-status';
// import { welcomeSectionService } from '../service/welcomeSectionService.js';

// Create a new welcome section
const createWelcomeSection = catchAsync(async (req, res) => {
  const welcomeSection = await welcomeSectionService.createWelcomeSection(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Welcome section created successfully',
    data: welcomeSection,
  });
});

// Get all welcome sections
const getAllWelcomeSections = catchAsync(async (req, res) => {
  const welcomeSections = await welcomeSectionService.getAllWelcomeSections();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Welcome sections fetched successfully',
    data: welcomeSections,
  });
});

// Get welcome section by ID
const getWelcomeSectionById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const welcomeSection = await welcomeSectionService.getWelcomeSectionById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Welcome section fetched successfully',
    data: welcomeSection,
  });
});

// Update welcome section
const updateWelcomeSection = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updatedWelcomeSection = await welcomeSectionService.updateWelcomeSection(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Welcome section updated successfully',
    data: updatedWelcomeSection,
  });
});

// Delete welcome section
const deleteWelcomeSection = catchAsync(async (req, res) => {
  const { id } = req.params;
  await welcomeSectionService.deleteWelcomeSection(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Welcome section deleted successfully',
    data: null,
  });
});

export const welcomeSectionController = {
  createWelcomeSection,
  getAllWelcomeSections,
  getWelcomeSectionById,
  updateWelcomeSection,
  deleteWelcomeSection,
};
