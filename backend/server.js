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
const OccasionCategory = require('./Models/OccasionCategoryModel');
const Occasion = require("./Models/OccasionModel")
//* Importing  Models *\\

//* Importing  Routes
const userRegisterRoute = require("./Routers/UserRoutes/RegesterRoute");
const userLoginRoute = require("./Routers/UserRoutes/LoginRoute");
const userLogoutRoute = require("./Routers/UserRoutes/LogoutRoute");
const createCategoryRoute = require("./Routers/OccasionCategoryRoutes/CreateCategoryRoute");
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


//! Category Routes

//? Create Category Route
app.use("", createCategoryRoute);


//! Category Routes !\\


app.post('/createOccasion', async (req, res) => {
  try {
    const { occasionCategoryName } = req.body;

    const category = await OccasionCategory.findOne({ occasionCategoryName })
    const id = category._id
    //? Creating new Occasion  
    const newOccasion = new Occasion({
      occasionName: req.body.occasionName,
      occasionPrice: req.body.occasionPrice,
      categoryId: id
    });

    await newOccasion.save();

    res.status(201).json(newOccasion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});