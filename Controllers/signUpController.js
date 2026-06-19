const db = require("../Models/queries");

const renderForm = (req, res) => {
  res.render("signUp", { user: req.user });
};

const createUser = async (req, res, next) => {
  try {
    const fullName = req.body.fullName;
    const username = req.body.username;
    const password = req.body.password;
    const passwordConfirm = req.body.password;
    const passwordSalt = "todo";
    const user = await db.createUser(
      fullName,
      username,
      password,
      passwordSalt,
    );
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  renderForm,
  createUser,
};
