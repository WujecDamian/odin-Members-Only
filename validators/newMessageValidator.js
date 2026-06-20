const { body, validationResult } = require("express-validator");

const validateNewMessage = [
  body("title")
    .escape()
    .notEmpty()
    .withMessage("Title cannot be empty")
    .isLength({ min: 1, max: 20 })
    .withMessage("Title must be between 1-20 characters")
    .isAlphanumeric("en-US", { ignore: " !?*<>{}();':[]&^%$#@!" })
    .withMessage("Title cannot contain special characters"),
  body("message")
    .escape()
    .notEmpty()
    .withMessage("Message cannot be empty")
    .isLength({ min: 8, max: 124 })
    .withMessage("Message must be between 8-124 characters")
    .isAlphanumeric("en-US", { ignore: " !?*<>{}();.,`~|':[]&^%$#@!" })
    .withMessage("Message cannot contain special characters"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateNewMessage;
