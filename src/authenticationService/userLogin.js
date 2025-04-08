import httpStatus from "http-status";
import ApiError from "../error/handleApiError.js";
// import sysAdminModel from "../model/sysAdminModel.js";
import bcrypt from 'bcrypt'
import { jwtHelpers } from "../helper/jwt/jwtHelpers.js";
import userModel from "../model/userModel.js";
import sendResponse from "../shared/sendResponse.js";
const userLogin = async (payload) => {
    const { userPhone, passCode } = payload;

    // Validate request body
    if (!userPhone || !passCode) {
        throw new ApiError(
            httpStatus.BAD_REQUEST,
            'Phone number and passcode are required'
        );
    }
    const userExist = await userModel.findOne({
        where: {
            userPhone: userPhone
        }
    });
    if (!userExist) {
        throw new ApiError(httpStatus.NOT_FOUND, "user not exist");
    }

    if (userExist.passCode !== passCode) {
        throw new ApiError(
          httpStatus.UNAUTHORIZED,
          'invalid code'
        );
      }
    const accessToken = await jwtHelpers.createToken({
        Id:userExist.Id,
       userPhone:userPhone
    }, "key123", "1d")

    const refreshToken = await jwtHelpers.createToken({
       Id:userExist.Id
    }, "key123", "30d")


    await userModel.update(
        { refreshToken: refreshToken },
        { where: { Id: userExist.Id } }
      );

      const userWithoutSensitiveData = {
        user:{
            Id: userExist.Id,
            userName: userExist.userName,
            userEmail: userExist.userEmail,
            userPhone: userExist.userPhone,
            country:userExist.country,
            nationality:userExist.nationality,
            address:userExist.address,
            nid:userExist.nid,
            bid:userExist.bid,
            passport:userExist.passport,
            status:userExist.status
        },
        accessToken,
        refreshToken
      
       
      };
    
   return userWithoutSensitiveData
}
export default userLogin