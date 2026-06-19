const db = require("../Models/queries");
const passport = require("passport");

const renderForm = (req, res) => {
  res.render("LogIn");
};

const logInUser = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/",
  failureMessage: true,
});

module.exports = {
  renderForm,
  logInUser,
};
