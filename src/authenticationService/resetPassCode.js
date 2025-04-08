import httpStatus from "http-status";
import ApiError from "../error/handleApiError.js";
// import catchAsync from "../shared/catchAsync";
import userModel from "../model/userModel.js";
import generatePasscode from "../shared/generateRandomNumber.js";
import SendSMS from "../shared/sendSms.js";
import sendResponse from "../shared/sendResponse.js";
import sequelize from "../model/index.js";

const resetPassCodeService = async (postBody) => {
    const { userPhone } = postBody;
    const transaction = await sequelize.transaction(); 
    try {
        if (!userPhone)
            throw new ApiError(httpStatus.BAD_REQUEST, "Phone Number is Required")
        const user = await userModel.findOne({
            where: { userPhone }
        },transaction);
        if (!user)
            throw new ApiError(httpStatus.NOT_FOUND, "User Not Found")
        const newPassCode = generatePasscode(6);
        const smsMessage = `Your passcode is: ${newPassCode}`;
        const sendSms = await SendSMS(userPhone, smsMessage);
        // console.log(newPassCode,sendSms)
        if (!sendSms)
            throw new ApiError(
                httpStatus.FAILED_DEPENDENCY,
                'Failed to send verification SMS'
            );
       const updateUser= await userModel.update(
            { passCode: newPassCode },
            { where: { userPhone } },
            transaction
        );
        await transaction.commit();
        return updateUser

       
    } catch (error) {
        await transaction.rollback()
        // next(error)
        
    }
   
    // sendResponse(res,{
    //     statusCode: httpStatus.OK,
    //     success: true,
    //     message: 'New Code sent successfully',
    //   })
}
export default resetPassCodeService