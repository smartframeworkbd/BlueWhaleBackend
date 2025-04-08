// import breakingNewsModel from '../models/breakingNewsModel.js';

import breakingNewsModel from "../model/breakingNewsModel.js";

// Create a new breaking news
const createBreakingNews = async (newsData) => {
  const breakingNews = await breakingNewsModel.create(newsData);
  return breakingNews;
};

// Get all breaking news
const getAllBreakingNews = async () => {
  const breakingNewsList = await breakingNewsModel.findAll({
    order: [['order', 'DESC']],
    
  });
  return breakingNewsList;
};

// Get breaking news by ID
const getBreakingNewsById = async (id) => {
  const breakingNews = await breakingNewsModel.findByPk(id);
  return breakingNews;
};

// Update breaking news by ID
const updateBreakingNews = async (id, updateData) => {
  // Perform the update operation
  const [updatedRows, updatedBreakingNews] = await breakingNewsModel.update(updateData, {
    where: { id },
    returning: true,
  });

  // updatedBreakingNews is an array of updated rows, get the first element if available
  const updatedBreakingNewsData = updatedBreakingNews && updatedBreakingNews.length > 0 ? updatedBreakingNews[0] : null;

  return updatedRows > 0 ? updatedBreakingNewsData : null;
};

// Delete breaking news by ID
const deleteBreakingNews = async (id) => {
  const deletedRows = await breakingNewsModel.destroy({
    where: { id },
  });
  return deletedRows > 0;
};

export const breakingNewsService = {
  createBreakingNews,
  getAllBreakingNews,
  getBreakingNewsById,
  updateBreakingNews,
  deleteBreakingNews,
};
