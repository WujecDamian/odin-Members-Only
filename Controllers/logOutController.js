const db = require("../Models/queries");
const passport = require("passport");

const logOut = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};

module.exports = {
  logOut,
};
