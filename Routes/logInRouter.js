const express = require("express");
const Router = express.Router();

const logInController = require("../Controllers/logInController");

Router.get("/", logInController.renderForm);
Router.post("/", logInController.logInUser);

module.exports = Router;
