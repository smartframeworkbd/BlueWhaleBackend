// Import the footer model
// import footerModel from "../model/footerModel.js";

import footerModel from "../model/footerModel.js";

// Create a new footer
const createFooter = async (footerData) => {
  const footer = await footerModel.create(footerData);
  return footer;
};

// Get all footers
const getAllFooters = async () => {
  const footers = await footerModel.findAll();
  return footers;
};

// Get footer by ID
const getFooterById = async (id) => {
  const footer = await footerModel.findByPk(id);
  return footer;
};

// Update footer by ID
const updateFooter = async (id, updateData) => {
    console.log(id, updateData);
  
    // Await update and destructure safely
    const [updatedRows, updatedData] = await footerModel.update(updateData, {
      where: { id }, // Adjust to match column name exactly
      returning: true,
    });
  
    // updatedData is an array of updated rows, check if any rows were updated
    const updatedFooter = updatedData && updatedData.length > 0 ? updatedData[0] : null;
  
    console.log(updatedRows, updatedFooter, "check");
  
    return updatedRows > 0 ? updatedFooter : null;
  };
// Delete footer by ID
const deleteFooter = async (id) => {
  const deletedRows = await footerModel.destroy({
    where: { Id: id },
  });
  return deletedRows > 0;
};

// Export the footer service
export const footerService = {
  createFooter,
  getAllFooters,
  getFooterById,
  updateFooter,
  deleteFooter,
};
