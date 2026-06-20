const express = require("express");
const Router = express.Router();

//controller
const deleteMessageController = require("../Controllers/deleteMessageController");
//validator

Router.get("/:messageId", deleteMessageController.deleteMessage);

module.exports = Router;
