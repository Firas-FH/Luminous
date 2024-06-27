//* Importing Packages
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//* Importing Packages *\\

//? Import The MongoDB Connection Module
const connectDB = require("./DB/Connection");

//? Creating Express application
const app = express();

//* Importing  Models
const User = require("./Models/UserModel");
const OccasionCategories = require('./Models/OccasionCategoriesModel')
//* Importing  Models *\\

//* Importing  Routes
const userRegisterRoute = require("./Routers/UserRoutes/RegesterRoute");
const userLoginRoute = require("./Routers/UserRoutes/LoginRoute");
const userLogoutRoute = require("./Routers/UserRoutes/LogoutRoute");
//* Importing  Routes *\\

//? Middlewares
app.use(express.json());
app.use(cors());
//? Middlewares ؟\\

//! Connect to MongoDB and Start The Server
connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
});
//! Connect to MongoDB and Start The Server !\\

//! Using Routes

//? User Registr Route
app.use("", userRegisterRoute);

//? User Login Route
app.use("", userLoginRoute);

//? User Logout Route
app.use("", userLogoutRoute);

//! Using Routes !\\

const OccasionCategory = require("./Models/OccasionCategoriesModel");

// Route to create a new OccasionCategory
app.post("/createCategory", async (req, res) => {
  try {
    const { name } = req.body;

    // Create new OccasionCategory
    const newCategory = new OccasionCategory({ name });
    const cName = OccasionCategories.findOne({ name })
    if (cName) {

    }
    else {
      await newCategory.save();

      res.status(201).json(newCategory);
    }

  } catch (err) {
    console.error("Error creating OccasionCategory:", err);
    res.status(500).json({ message: "Server error" });
  }
});