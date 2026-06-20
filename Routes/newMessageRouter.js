const express = require("express");
const Router = express.Router();

//controller
const newMessageController = require("../Controllers/newMessageController");
//validator
const validateNewMessage = require("../validators/newMessageValidator");

Router.get("/", newMessageController.renderForm);
Router.post("/", validateNewMessage, newMessageController.addNewMessage);

module.exports = Router;
