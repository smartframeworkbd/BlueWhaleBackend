import catchAsync from '../shared/catchAsync.js';
import sendResponse from '../shared/sendResponse.js';
import httpStatus from 'http-status';
import UserModel from '../model/userModel.js';
import ApiError from '../error/handleApiError.js';
import generatePasscode from '../shared/generateRandomNumber.js';
import SendSMS from '../shared/sendSms.js';
import userLogin from '../authenticationService/userLogin.js';
import resetPassCodeService from '../authenticationService/resetPassCode.js';
import { userService } from '../service/grsUserService.js';
import userModel from '../model/userModel.js';


const createUser = catchAsync(async (req, res, next) => {

  if (!req.body.userPhone) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Phone number is required');
  }


  // const phoneRegex = /^[0-9\-\+\(\) ]+$/;
  // if (!phoneRegex.test(req.body.ushone)) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid phone number format');
  // }

  // Check if user already exists
  const existingUser = await UserModel.findOne({
    where: { userPhone: req.body.userPhone }
  });

  if (existingUser) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'User with this phone number already exists'
    );
  }


  // Generate passcode
  const passCode = generatePasscode(6);

  // Prepare user data
  const userData = {
    ...req.body,
    passCode
  };

  // Try to send SMS first before creating user
  const smsMessage = `Hello ${req.body.userName},\n\n` +
    `You are receiving this message because a login attempt was made with your account.\n\n` +
    `Here are your login details:\n` +
    `- Passcode: ${passCode}\n` +
    `- Phone: ${req.body.userPhone}\n` +
    // `- Email: ${req.body.userEmail}\n\n` +
    `If this wasn't you, please contact support immediately.`;
  const sendSms = await SendSMS(req.body.userPhone, smsMessage);

  if (!sendSms) {
    throw new ApiError(
      httpStatus.FAILED_DEPENDENCY,
      'Failed to send verification SMS'
    );
  }

  // Create user after successful SMS
  const user = await userService.createUser(userData);

  const sanitizedUser = {
    ...user.toJSON(),
    passCode: undefined
  };

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "অভিযোগকারী লগইন সফল হয়েছে",
    // message: 'User created successfully. Verification code sent to your phone.',
    data: sanitizedUser
  });
});

//reset password

const resetPassCode = catchAsync(async (req, res, next) => {
  const data = await resetPassCodeService(req.body);

  // if(data)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'New Code sent successfully',
  })
})

const getUsers = catchAsync(async (req, res, next) => {
  const data = await userService.getUsers()


  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully',
    data: data
  });
});

const updateUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const data = await userService.updateUser(req.body, id);

  if (data) {
    const updatedUser = await UserModel.findByPk(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User updated successfully',
      data: updatedUser
    });
  } else {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'User not found',
      data: null
    });
  }
});

const getUserById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const data = await userService.getUser(id);

  if (data) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User retrieved successfully',
      data: data
    });
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found")

  }
});

const deleteUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const data = userService.deleteUser(id);

  if (data) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User update successfully',
      data: null
    });
    res.status(httpStatus.NO_CONTENT).send();
  } else {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'User not found',
      data: null
    });
  }
});

const LoginUser = catchAsync(async (req, res) => {
  const data = await userLogin(req.body);
  // console.log(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user logged in successfully !',
    data: data,
  });
})

const changePassCode = catchAsync(async (req, res) => {
  const { oldPassword, newPassword, userId } = req.body;

  // Validate required fields
  if (!userId) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User not found!');
  }
  if (!oldPassword || !newPassword) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Old password and new password are required.');
  }

  // Find user by userId
  const user = await userModel.findOne({ where: { Id: userId } });
  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User not found!');
  }

  // Check if old password matches
  if (user.passCode !== oldPassword) {  // Consider using a password hashing comparison function here
    throw new ApiError(httpStatus.BAD_REQUEST, 'Previous password does not match!');
  }

  // Update password
  await userService.updateUser({ passCode: newPassword }, userId);

  // Send response
  res.status(httpStatus.OK).json({
    message: 'Password updated successfully.',
  });
  sendResponse(
    res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Password updated successfully.',

    data: null,
  }
  )
});

export const userController = { createUser, getUserById, getUsers, updateUser, deleteUser, LoginUser, resetPassCode, changePassCode };
