const db = require("../Models/queries");
const passport = require("passport");
require("dotenv").config();

const renderForm = (req, res) => {
  if (res.locals.currentUser) {
    res.render("club");
  } else res.redirect("/");
};

const checkSecretCode = async (req, res) => {
  const code = req.body.code;
  const userId = req.body.currentUserId;
  if (code === process.env.SECRET_CODE) {
    await db.addMembership(userId);
  }
  res.redirect("/");
};

module.exports = {
  renderForm,
  checkSecretCode,
};
