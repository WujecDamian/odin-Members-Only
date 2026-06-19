const db = require("../Models/queries");

const renderForm = (req, res) => {
  res.render("signUp");
};

const createUser = async (req, res) => {
  const fullname = req.body.fullName;
  const username = req.body.username;
  const password = req.body.password;
  const passwordConfirm = req.body.password;
  const user = await db.createUser();
  res.redirect("/");
};

module.exports = {
  renderForm,
  createUser,
};
