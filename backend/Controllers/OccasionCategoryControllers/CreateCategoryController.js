const OccasionCategory = require('../../Models/OccasionCategoryModel')

//* Importing Constants Messages
const {
    CATEGORY_NAME_REQUIRED,
    CATEGORY_NAME_TOO_SHORT,
    CATEGORY_NAME_TOO_LONG,
    CATEGORY_NAME_EXISTS,
    SERVER_ERROR
} = require("../../Constants/OccasionCategory/CreateCategoryMessages");
//* Importing Constants Messages *\\


//? Separate method to check if category name exists
const checkCategoryExists = async (name) => {
    const existingCategory = await OccasionCategory.findOne({ name });

    if (existingCategory) {
        throw new Error(CATEGORY_NAME_EXISTS);
    }
};

//? Create Functions To Validation 
// async function validateFields(req) {
//     const { userName, userEmail, userPassword } = req.body;
//     if (!userName || !userEmail || !userPassword) {
//         throw new Error(REQUIRED_FIELD_ERROR);
//     }
// }

//? Separate method to create a new category
const createCategory = async (name, imageUrl) => {
    const newCategory = new OccasionCategory({ name, imageUrl });
    await newCategory.save();
    return newCategory;
};


module.exports = {
    checkCategoryExists,
    createCategory
}