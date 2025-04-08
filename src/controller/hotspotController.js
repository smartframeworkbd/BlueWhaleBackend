
import catchAsync from '../shared/catchAsync.js';
import sendResponse from '../shared/sendResponse.js';
import httpStatus from 'http-status';
import { hotspotService } from '../service/hotspotService.js';

// Create a new hotspot
const createHotspot = catchAsync(async (req, res) => {
  let fileData = null;
  if (req.file) {
    fileData = {
      fileName: req.file.filename,
      path: req.file.path,
      mimeType: req.file.mimetype,
      size: req.file.size,
    };
  }

  const bodyData = JSON.parse(req.body.data)
  const hotspotData = {
    ...bodyData,
    file: fileData, // Store the file metadata in JSON format
  };
  const hotspot = await hotspotService.createHotspot(hotspotData);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Hotspot created successfully',
    data: hotspot,
  });
});

// Get all hotspots
const getAllHotspots = catchAsync(async (req, res) => {
  const hotspots = await hotspotService.getAllHotspots();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Hotspots fetched successfully',
    data: hotspots,
  });
});

// Get hotspot by ID
const getHotspotById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const hotspot = await hotspotService.getHotspotById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Hotspot fetched successfully',
    data: hotspot,
  });
});

// Update hotspot
const updateHotspot = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updatedHotspot = await hotspotService.updateHotspot(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Hotspot updated successfully',
    data: updatedHotspot,
  });
});

// Delete hotspot
const deleteHotspot = catchAsync(async (req, res) => {
  const { id } = req.params;
  await hotspotService.deleteHotspot(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Hotspot deleted successfully',
    data: null,
  });
});

const getHostspotBySection = catchAsync(async (req, res) => { 
  const sectionName = req.query.hotspotSectionName;
  const hotspots = await hotspotService.getHostspotBySection(sectionName);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Hotspots retrieved successfully',
    data: hotspots,
  });
});

export const hotspotController = {
  createHotspot,
  getAllHotspots,
  getHotspotById,
  updateHotspot,
  deleteHotspot,
  getHostspotBySection
};
