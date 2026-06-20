const { body, validationResult } = require("express-validator");

const validateLogInForm = [
  body("username")
    .escape()
    .notEmpty()
    .withMessage("Username cannot be empty")
    .isLength({ min: 1, max: 40 })
    .withMessage("Username must be between 1-40 characters")
    .isAlphanumeric()
    .withMessage("Username cannot contain special characters"),
  body("password")
    .escape()
    .notEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 8, max: 32 })
    .withMessage("Password ust be between 8-32 characters")
    .isAlphanumeric()
    .withMessage("Password cannot contain special characters"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateLogInForm;
