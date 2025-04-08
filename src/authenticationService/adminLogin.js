import httpStatus from "http-status";
import ApiError from "../error/handleApiError.js";
// import sysAdminModel from "../model/adminModel.js";
import bcrypt from 'bcrypt'
import { jwtHelpers } from "../helper/jwt/jwtHelpers.js";
import adminModel from "../model/adminModel.js";
const adminLogin = async (payload) => {
    const { email, password } = payload;
    const adminExist = await adminModel.findOne({
        where: {
            adminEmail: email
        }
    });
    if (!adminExist) {
        throw new ApiError(httpStatus.NOT_FOUND, "admin not exist");
    }
    const passwordExist = await bcrypt.compare(password, adminExist.adminPassword);;

    if (adminExist && !passwordExist)
        throw new ApiError(httpStatus.UNAUTHORIZED, "password incorrect")

    const token = await jwtHelpers.createToken({
        Id: adminExist.Id
    }, "key123", "1d")
    return {
        token,
        data:adminExist
    }
}
export default adminLogin