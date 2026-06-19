const db = require("../Models/queries");

const renderForm = (req, res) => {
  res.render("signUp");
};

const createUser = async (req, res) => {
  const fullname = req.body.fullName;
  const user = await db.createUser();
  res.redirect("/");
};

module.exports = {
  renderForm,
  createUser,
};
