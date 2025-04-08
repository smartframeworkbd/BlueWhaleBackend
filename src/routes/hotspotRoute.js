// src/routes/hotspotRoutes.js

import express from 'express';
import { hotspotController } from '../controller/hotspotController.js';
import upload from '../shared/upload.js';

const hotspotRouter = express.Router();

//!Hotspot management routes
hotspotRouter.post('/create',upload.single("file"), hotspotController.createHotspot);      // Create a new hotspot
hotspotRouter.get('/', hotspotController.getAllHotspots);      // Get all hotspots
hotspotRouter.get('/:id', hotspotController.getHotspotById);  // Get hotspot by ID
hotspotRouter.patch('/:id', hotspotController.updateHotspot);    // Update hotspot
hotspotRouter.delete('/:id', hotspotController.deleteHotspot);  // Delete hotspot


hotspotRouter.get("/get-by-section",hotspotController.getHostspotBySection)
export default hotspotRouter;
