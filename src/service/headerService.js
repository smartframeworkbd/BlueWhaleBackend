import headerModel from "../model/headerModel.js";


// Create a new header entry
const createHeader = async (headerData) => {
    console.log(headerData);
    
    const header = await headerModel.create(headerData);
    console.log(header);
    
    return header;
};

// Get all header entries
const getAllHeaders = async () => {
    const headers = await headerModel.findAll();
    return headers;
};

// Get a header entry by ID
const getHeaderById = async (id) => {
    const header = await headerModel.findByPk(id);
    return header;
};

// Update a header entry by ID
const updateHeader = async (id, updateData) => {
    const result = await headerModel.update(updateData, {
        where: { id },
        returning: true,
    });

    // Check if the result has at least two elements
    // console.log(result);
    
  return result // Ensure to return the first element of the updated header array
};

// Delete a header entry by ID
const deleteHeader = async (id) => {
    const deletedRows = await headerModel.destroy({
        where: { id },
    });
    return deletedRows > 0;
};

export const headerService = {
    createHeader,
    getAllHeaders,
    getHeaderById,
    updateHeader,
    deleteHeader,
};
