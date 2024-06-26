const { Schema, model } = require("mongoose");

// Define Occasions Schema
const occasionSchema = new Schema({
    occasion_id: {
        type: Number,
        required: true,
        unique: true,
    },
    user_id: {
        type: Number,
        required: true,
    },
    category_id: {
        type: Number,
        required: true,
    },
    place_id: {
        type: Number,
        required: true,
    },
    occasion: {
        type: String,
        required: true,
    },
    event_date: {
        type: Date,
        required: true,
    },
    colors: String,
    decorations: String,
    decorations_price: Schema.Types.Decimal128,
    invitees_count: {
        type: Number,
        default: 0,
    },
    invitees_price: Schema.Types.Decimal128,
    food: String,
    food_price: Schema.Types.Decimal128,
    invitation_template: String,
    invitation_colors: String,
    invitation_font: String,
    invitation_message: String,
    invitation_image_url: String,
    additional_details: String,
    total_price: Schema.Types.Decimal128,
    status: {
        type: String,
        enum: ["pending", "confirmed", "cancelled"],
        default: "pending",
    },

});

// Create model
const Occasion = model("Occasion", occasionSchema);

module.exports = Occasion;
