const db = require("../Models/queries");
const passport = require("passport");

const renderForm = (req, res) => {
  res.render("newMessage");
};

const addNewMessage = async (req, res, next) => {
  try {
    const title = req.body.title;
    const message = req.body.message;
    const userId = res.locals.currentUser.id;

    const newMessage = await db.addNewMessage(title, message, userId);
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  renderForm,
  addNewMessage,
};
