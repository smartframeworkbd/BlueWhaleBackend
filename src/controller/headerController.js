import { headerService } from '../service/headerService.js'; // Adjust the path to your header service
import catchAsync from '../shared/catchAsync.js'; // Error handling middleware
import sendResponse from '../shared/sendResponse.js'; // Response formatting
import httpStatus from 'http-status';

// Create a new header entry
const createHeader = catchAsync(async (req, res) => {

    console.log("hi dev")
    const header = await headerService.createHeader(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Header created successfully',
        data: header,
    });
});

// Get all header entries
const getAllHeaders = catchAsync(async (req, res) => {
    const headers = await headerService.getAllHeaders();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Headers fetched successfully',
        data: headers,
    });
});

// Get a header entry by ID
const getHeaderById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const header = await headerService.getHeaderById(id);
    if (!header) {
        return sendResponse(res, {
            statusCode: httpStatus.NOT_FOUND,
            success: false,
            message: 'Header not found',
            data: null,
        });
    }
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Header fetched successfully',
        data: header,
    });
});

// Update a header entry by ID
const updateHeader = catchAsync(async (req, res) => {
    const { id } = req.params;
    const updatedHeader = await headerService.updateHeader(id, req.body);
    if (!updatedHeader) {
        return sendResponse(res, {
            statusCode: httpStatus.NOT_FOUND,
            success: false,
            message: 'Header not found or not updated',
            data: null,
        });
    }
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Header updated successfully',
        data: updatedHeader,
    });
});

// Delete a header entry by ID
const deleteHeader = catchAsync(async (req, res) => {
    const { id } = req.params;
    const deleted = await headerService.deleteHeader(id);
    if (!deleted) {
        return sendResponse(res, {
            statusCode: httpStatus.NOT_FOUND,
            success: false,
            message: 'Header not found',
            data: null,
        });
    }
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Header deleted successfully',
        data: null,
    });
});

export const headerController = {
    createHeader,
    getAllHeaders,
    getHeaderById,
    updateHeader,
    deleteHeader,
};
