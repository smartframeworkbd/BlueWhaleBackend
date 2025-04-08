// src/routes/hotspotRoutes.js

import express from 'express';
import { headerController } from '../controller/headerController.js';
// import { hotspotController } from '../controller/hotspotController.js';

const headerRouter = express.Router();

// Hotspot management routes
headerRouter.post('/create', headerController.createHeader);      // Create a new hotspot
headerRouter.get('/', headerController.getAllHeaders);      // Get all hotspots
headerRouter.get('/:id', headerController.getHeaderById);  // Get hotspot by ID
headerRouter.patch('/:id', headerController.updateHeader);    // Update hotspot
headerRouter.delete('/:id', headerController.deleteHeader);  // Delete hotspot

export default headerRouter;
