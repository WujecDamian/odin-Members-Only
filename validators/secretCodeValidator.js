const { body, validationResult } = require("express-validator");

const validateSecretCode = [
  body("code")
    .escape()
    .notEmpty()
    .withMessage("There is some code and it's for sure not empty")
    .isLength({ min: 1, max: 100 })
    .withMessage(
      "Hint: code is less than 100 characters try to bruteforce it haha ;)",
    ),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateSecretCode;
