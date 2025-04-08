import httpStatus from "http-status";
import catchAsync from "../shared/catchAsync.js"
import sendResponse from "../shared/sendResponse.js";
import { adminService } from "../service/adminService.js";
import adminModel from "../model/adminModel.js";
import adminLogin from "../authenticationService/adminLogin.js";
import ApiError from "../error/handleApiError.js";

const createAdmin = catchAsync(async (req, res) => {
  console.log("req hit");


  // const { error } = ad.validate(req.body);

  // if (error) {
  //     throw new ApiError(httpStatus.BAD_REQUEST,error.details[0].message)

  // }


  const data = await adminService.createAdmin(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Admin created successfully',
    data: data
  });
});
const getAdmin = catchAsync(async (req, res) => {
  const data = await adminService.getAdmin();
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'retrieve data successfully',
    data: data
  });
});


const getAdminById = catchAsync(async (req, res) => {
  const { id } = req.params;
  console.log(id,"id");
  

  const data = await adminService.getAdminById(id);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'retrieve data successfully',
    data: data
  });
});



const updateAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;


  const data = await adminService.updateAdmin(req.body, id);

  if (data) {
    const updatedUser = await adminModel.findByPk(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: ' updated successfully',
      data: updatedUser
    });
  } else {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'sys admin not found',
      data: null
    });
  }

});
const deleteAdmin = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const data = await adminService.deleteAdmin(id);

  if (data) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'delete successfully',
      data: null
    });
  } else {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Admin not found',
      data: null
    });
  }
});

const LoginAdmin = catchAsync(async (req, res) => {
  const data = await adminLogin(req.body);
  console.log(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'admin logged in successfully !',
    data: data,
  });
})

const resetPassword = catchAsync(async (req, res,next) => {

  const { oldPassword, newPassword } = req.body;
  const { Id } = req.user;
  console.log(req.user);
  
  // Validate input
  if (!oldPassword || !newPassword) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Old password and new password are required');
  }
  try {
    const admin = await adminService.changePassword(Id, oldPassword, newPassword);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Password changed successfully',
      data: { adminId: admin.Id, name: admin.adminFullName, email: admin.adminEmail },
    });
  } catch (error) {
    next(new ApiError(httpStatus.BAD_REQUEST, error.message));
  }
})
export const adminController = {
  createAdmin,
  getAdmin,
  updateAdmin,
  deleteAdmin,
  LoginAdmin,
  getAdminById,
  resetPassword

}
