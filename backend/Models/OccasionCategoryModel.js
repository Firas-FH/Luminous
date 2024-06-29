const { Schema, model } = require("mongoose");

const occasionCategorySchema = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: [true, "Category name is required."],
        minlength: [3, "Category name must be at least 3 characters long."],
        maxlength: [25, "Category name cannot exceed 25 characters."],
    },
    imageUrl: {
        type: String,
        required: false,
        match: [/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg)$/, "Invalid image URL format."],
    }
}, {
    timestamps: true
});

const OccasionCategory = model("OccasionCategory", occasionCategorySchema);

module.exports = OccasionCategory;
