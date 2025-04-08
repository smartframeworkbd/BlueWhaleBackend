// import welcomeSectionModel from '../models/welcomeSectionModel.js';

import welcomeSectionModel from "../model/welcomeSectionModel.js";

// Create a new welcome section
const createWelcomeSection = async (sectionData) => {
  const welcomeSection = await welcomeSectionModel.create(sectionData);
  return welcomeSection;
};

// Get all welcome sections
const getAllWelcomeSections = async () => {
  const welcomeSections = await welcomeSectionModel.findAll();
  return welcomeSections;
};

// Get welcome section by ID
const getWelcomeSectionById = async (id) => {
  const welcomeSection = await welcomeSectionModel.findByPk(id);
  return welcomeSection;
};

// Update welcome section by ID
const updateWelcomeSection = async (id, updateData) => {
  const result = await welcomeSectionModel.update(updateData, {
    where: { Id: id },
    // returning: true,
  });
  return result[0] > 0
};

// Delete welcome section by ID
const deleteWelcomeSection = async (id) => {
  const deletedRows = await welcomeSectionModel.destroy({
    where: { Id: id },
  });
  return deletedRows > 0;
};

export const welcomeSectionService = {
  createWelcomeSection,
  getAllWelcomeSections,
  getWelcomeSectionById,
  updateWelcomeSection,
  deleteWelcomeSection,
};
