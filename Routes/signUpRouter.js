const express = require("express");
const Router = express.Router();

//controller
const signUpController = require("../Controllers/signUpController");
//validator
const validateSignUpForm = require("../validators/signUpValidator");

Router.get("/", signUpController.renderForm);
Router.post("/", validateSignUpForm, signUpController.createUser);

module.exports = Router;
