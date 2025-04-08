import httpStatus from "http-status";
import { productCategoryService } from "../service/productCategoryService.js";
import catchAsync from "../shared/catchAsync.js";
import sendResponse from "../shared/sendResponse.js";

const createProductCategory = catchAsync(async (req, res) => {
    const result = await productCategoryService.createProductCategory(req.body);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Product category created successfully',
        data: result,
    });
});

const getAllProductCategories = catchAsync(async (req, res) => {
    const result = await productCategoryService.getAllProductCategories();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product categories retrieved successfully',
        data: result,
    });
});

const getProductCategoryById = catchAsync(async (req, res) => {
    const result = await productCategoryService.getProductCategoryById(req.params.id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product category retrieved successfully',
        data: result,
    });
});

const updateProductCategory = catchAsync(async (req, res) => {
    const result = await productCategoryService.updateProductCategory(req.params.id, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product category updated successfully',
        data: result,
    });
});

const deleteProductCategory = catchAsync(async (req, res) => {
    await productCategoryService.deleteProductCategory(req.params.id);

    sendResponse(res, {
        statusCode: httpStatus.NO_CONTENT,
        success: true,
        message: 'Product category deleted successfully',
    });
});

export const productCategoryController = {
    createProductCategory,
    getAllProductCategories,
    getProductCategoryById,
    updateProductCategory,
    deleteProductCategory,
};
