import ApiError from '../error/handleApiError.js';
import httpStatus from 'http-status';
import bannerModel from '../model/bannerModel.js';
// import bannerModel from '../model/bannerModel.js';

// Create banner
const createBanner = async (bannerData) => {
  const banner = await bannerModel.create(bannerData);
  return banner;
};

// Get all banners
const getBanners = async () => {
  const banners = await bannerModel.findAll();
  return banners;
};

// Get banner by ID
const getBannerById = async (id) => {
  const banner = await bannerModel.findByPk(id);
  if (!banner) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Banner not found');
  }
  return banner;
};

// Update banner
const updateBanner = async (id, updateData) => {
  const result = await bannerModel.update(updateData, {
    where: { id: id },
  });
  return result[0] > 0;
};

// Delete banner
const deleteBanner = async (id) => {
  const banner = await bannerModel.findByPk(id);
  if (!banner) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Banner not found');
  }
  await banner.destroy();
  return true;
};

export const bannerService = {
  createBanner,
  getBanners,
  getBannerById,
  updateBanner,
  deleteBanner,
};
