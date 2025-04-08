import catchAsync from '../shared/catchAsync.js';
import sendResponse from '../shared/sendResponse.js';
import httpStatus from 'http-status';
import ApiError from '../error/handleApiError.js';
import { bannerService } from '../service/bannerService.js';
// import { bannerService } from '../service/bannerService.js';

// Create banner
const createBanner = catchAsync(async (req, res) => {
  const banner = await bannerService.createBanner(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Banner created successfully',
    data: banner,
  });
});

// Get all banners
const getBanners = catchAsync(async (req, res) => {
  const banners = await bannerService.getBanners();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Banners retrieved successfully',
    data: banners,
  });
});

// Get banner by ID
const getBannerById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const banner = await bannerService.getBannerById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Banner retrieved successfully',
    data: banner,
  });
});

// Update banner
const updateBanner = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updated = await bannerService.updateBanner(id, req.body);

  if (!updated) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Banner not found or not updated');
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Banner updated successfully',
    data: updated,
  });
});

// Delete banner
const deleteBanner = catchAsync(async (req, res) => {
  const { id } = req.params;
  const deleted = await bannerService.deleteBanner(id);

  if (!deleted) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Banner not found');
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Banner deleted successfully',
    data: null,
  });
});

export const bannerController = {
  createBanner,
  getBanners,
  getBannerById,
  updateBanner,
  deleteBanner,
};
