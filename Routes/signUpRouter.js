const express = require("express");
const Router = express.Router();

const signUpController = require("../Controllers/signUpController");

Router.get("/", signUpController.renderForm);
Router.post("/", signUpController.createUser);

module.exports = Router;
