//* Importing Packages
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');

const connectDB = require("./DB/Connection");

const app = express();

const port = process.env.PORT || 5000;

const User = require("./Models/UserModel");

const userRegisterRoute = require("./Routers/UserRoutes/RegesterRoute");
const userLoginRoute = require("./Routers/UserRoutes/LoginRoute");
const userLogoutRoute = require("./Routers/UserRoutes/LogoutRoute");
const eventRouter = require('./Routers/EventRoutes/eventRouter');


app.use(express.json());
app.use(cors());

app.use("", userRegisterRoute);

app.use("", userLoginRoute);

app.use("", userLogoutRoute);

app.use('/events', eventRouter);

connectDB();
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
