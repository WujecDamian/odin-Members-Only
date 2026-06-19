const express = require("express");
const Router = express.Router();

const logOutController = require("../Controllers/logOutController");

Router.get("/", logOutController.logOut);

module.exports = Router;
