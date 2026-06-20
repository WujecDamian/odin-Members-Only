const db = require("../Models/queries");
const passport = require("passport");

const deleteMessage = async (req, res) => {
  const messageId = req.params.messageId;
  await db.deleteMessage(messageId);
  res.redirect("/");
};

module.exports = {
  deleteMessage,
};
