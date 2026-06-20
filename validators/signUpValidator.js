const { body, validationResult } = require("express-validator");

const validateSignUpForm = [
  body("fullName")
    .escape()
    .notEmpty()
    .withMessage("Full Name cannot be empty")
    .isLength({ min: 1, max: 40 })
    .withMessage("Full Name Must be between 1-40 characters")
    .isAlpha()
    .withMessage("Full Name cannot contain special characters"),
  body("username")
    .escape()
    .notEmpty()
    .withMessage("Username cannot be empty")
    .isLength({ min: 1, max: 40 })
    .withMessage("Username must be between 1-40 characters")
    .isAlpha()
    .withMessage("Username cannot contain special characters"),
  body("password")
    .escape()
    .notEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 8, max: 32 })
    .withMessage("Password ust be between 8-32 characters")
    .isAlpha()
    .withMessage("Password cannot contain special characters"),
  body("passwordConfirm").custom((passwordConfirm, { req }) => {
    return passwordConfirm === req.body.password;
  }),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateSignUpForm;
