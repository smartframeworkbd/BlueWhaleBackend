// import adminModel from "../model/adminModel.js";
import bcrypt from 'bcrypt'
import adminModel from '../model/adminModel.js';
import ApiError from '../error/handleApiError.js';
import httpStatus from 'http-status';
// import adminModel from '../model/adminModel.js';

//create user
const createAdmin=async(postBody)=>{
     console.log(postBody);
     
      //  const {adminPassword}=postBody;
      //  const hashedPassword = await bcrypt.hash(adminPassword,10);
      
      //   const adminWithHashedPassword = {
      //     ...postBody,
      //     adminPassword: hashedPassword
      // };
  
      // Create a new sysAdmin record with the hashed password
      const result = await adminModel.create(postBody);
  
      return result;
    
    
    
   
}
//get all user
const getAdmin = async()=>{
  
    
    const result = await adminModel.findAll();
    console.log("admin",result);
    
    return result
}
//update user
const updateAdmin = async(postBody,id)=>{
      const result = await adminModel.update(postBody, {
    where: { id }
  });
  return result;
   
}
//get single user
const getAdminById = async(id)=>{
   
    const result = await adminModel.findByPk(id);
    return result;

}

const deleteAdmin= async(id)=>{
    const result = await adminModel.destroy({
        where: { id }
      });
    return result;
}

const changePassword = async (adminId, oldPassword, newPassword) => {
  // Find the admin by ID
  const admin = await adminModel.findByPk(adminId);
  if (!admin) {
    throw new ApiError(httpStatus.NOT_FOUND,'Admin not found');
  }

  // Check if the old password matches
  const isMatch = await admin.isPasswordValid(oldPassword);
  if (!isMatch) {
    throw new ApiError(httpStatus.BAD_REQUEST,'Old password is incorrect');
    // throw new Error('Old password is incorrect');
  }

  // Hash the new password and update the admin
  admin.adminPassword = await bcrypt.hash(newPassword, 10);
  await admin.save();

  return admin;
};


export const adminService={
    createAdmin,
    getAdmin,
    updateAdmin,
    deleteAdmin,
    getAdminById,
    changePassword
  
}