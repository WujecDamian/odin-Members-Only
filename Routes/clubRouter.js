const express = require("express");
const Router = express.Router();

//controller
const clubController = require("../Controllers/clubController");
//validator
const validateSecretCode = require("../validators/secretCodeValidator");

Router.get("/", clubController.renderForm);
Router.post("/", validateSecretCode, clubController.checkSecretCode);

module.exports = Router;
