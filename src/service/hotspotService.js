// src/service/hotspotService.js

import hotspotModel from '../model/hotspotModel.js';
import ApiError from '../error/handleApiError.js';
import httpStatus from 'http-status';

// Create a new hotspot
const createHotspot = async (hotspotData) => {
  const hotspot = await hotspotModel.create(hotspotData);
  return hotspot;
};

// Get all hotspots
const getAllHotspots = async () => {
  const hotspots = await hotspotModel.findAll({
    order: [['order', 'DESC']], // Order by the `order` field
  });
  return hotspots;
};

// Get hotspot by ID
const getHotspotById = async (id) => {
  const hotspot = await hotspotModel.findByPk(id);
  if (!hotspot) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Hotspot not found');
  }
  return hotspot;
};

// Update hotspot
const updateHotspot = async (id, hotspotData) => {
  const hotspot = await hotspotModel.findByPk(id);
  if (!hotspot) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Hotspot not found');
  }
  const updatedHotspot = await hotspot.update(hotspotData);
  return updatedHotspot;
};

// Delete hotspot
const deleteHotspot = async (id) => {
  const hotspot = await hotspotModel.findByPk(id);
  if (!hotspot) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Hotspot not found');
  }
  await hotspot.destroy();
  return true;
};
const getHostspotBySection = async (sectionName) => {
  const hotspots = await hotspotModel.findAll({
    where: {
      hotspotSectionName: sectionName,
    },
    order: [['order', 'DESC']],
    
    
    
  });

  if (hotspots.length === 0) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No hotspots found for the given section');
  }

  return hotspots;
};
export const hotspotService = {
  createHotspot,
  getAllHotspots,
  getHotspotById,
  updateHotspot,
  deleteHotspot,
  getHostspotBySection
};
