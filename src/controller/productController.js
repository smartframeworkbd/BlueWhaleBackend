import httpStatus from "http-status";
import { productService } from "../service/productService.js";
import catchAsync from "../shared/catchAsync.js";
import sendResponse from "../shared/sendResponse.js";

const createProduct = catchAsync(async (req, res) => {
    const result = await productService.createProduct(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Product created successfully",
        data: result,
    });
});

const getAllProducts = catchAsync(async (req, res) => {
    const result = await productService.getAllProducts();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Products fetched successfully",
        data: result,
    });
});

const getProductById = catchAsync(async (req, res) => {
    const result = await productService.getProductById(req.params.id);
    if (!result) {
        return sendResponse(res, {
            statusCode: httpStatus.NOT_FOUND,
            success: false,
            message: "Product not found",
        });
    }
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Product fetched successfully",
        data: result,
    });
});

const getProductBySlug = catchAsync(async (req, res) => {
    const result = await productService.getProductBySlug(req.params.slug);
    if (!result) {
        return sendResponse(res, {
            statusCode: httpStatus.NOT_FOUND,
            success: false,
            message: "Product not found",
        });
    }
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Product fetched successfully",
        data: result,
    });
});

const updateProduct = catchAsync(async (req, res) => {
    const result = await productService.updateProduct(req.params.id, req.body);
    if (!result) {
        return sendResponse(res, {
            statusCode: httpStatus.NOT_FOUND,
            success: false,
            message: "Product not found",
        });
    }
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Product updated successfully",
        data: result,
    });
});

const deleteProduct = catchAsync(async (req, res) => {
    const result = await productService.deleteProduct(req.params.id);
    if (!result) {
        return sendResponse(res, {
            statusCode: httpStatus.NOT_FOUND,
            success: false,
            message: "Product not found",
        });
    }
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Product deleted successfully",
    });
});

export const productController = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getProductBySlug
};
