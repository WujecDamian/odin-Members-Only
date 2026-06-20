const express = require("express");
const Router = express.Router();

//controller
const logInController = require("../Controllers/logInController");
//validator
const validateLogInForm = require("../validators/logInValidator");

Router.get("/", logInController.renderForm);
Router.post("/", validateLogInForm, logInController.logInUser);

module.exports = Router;
