import ApiError from '../error/handleApiError.js';
import httpStatus from 'http-status';
import contentModel from '../model/contentModel.js';
// import contentModel from '../model/contentModel.js';

// Create a new content entry
const createContent = async (contentData) => {
  const content = await contentModel.create(contentData);
  return content;
};

// Get all content entries
const getContents = async () => {
  const contents = await contentModel.findAll();
  return contents;
};

// Get content by ID
const getContentById = async (id) => {
  const content = await contentModel.findByPk(id);
  if (!content) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Content not found');
  }
  return content;
};

// Update content by ID
const updateContent = async (id, updateData) => {
  console.log(updateData, "hello");

  const result = await contentModel.update(updateData, {
    where: { Id: id },
    //   returning: true,   
  });

  return result[0] > 0
};
// Delete content by ID
const deleteContent = async (id) => {
  const content = await contentModel.findByPk(id);
  if (!content) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Content not found');
  }
  await content.destroy();
  return true;
};

const getContentBySlug = async (slug) => {
  const content = await contentModel.findOne({
    where: {
      slag: slug

    }
  })
  if (!content) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Content not found');
  }

  return content;
};

const getContentMenu = async () => {


  const content = await contentModel.findAll({
    where: {
      isMenu: true

    }
  })

  console.log(content,"data");
  
  if (!content) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Content not found');
  }

  return content;
};


export const contentService = {
  createContent, getContents, getContentById, updateContent, deleteContent, getContentBySlug,
  getContentMenu
};
