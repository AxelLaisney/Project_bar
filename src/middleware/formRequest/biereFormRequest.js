const { body, validationresult } = require("express-validator")


const validateProduct = [
  body("name")
    .notEmpty().withMessage("Le nom doit être saisie ")
    .isString().withMessage("Le nom doit être un string")
    .trim(),
  body("description")
    .notEmpty().withMessage("La description doit être saisie ")
    .isString().withMessage("La description doit être un string")
    .trim(),

  body("prix")
    .notEmpty().withMessage("Le prix doit être saisie ")
    .isFloat({ gt: 0 }).withMessage("Le prix doit être un nombre")
    .trim(),

    body("degree")
    .notEmpty().withMessage("Le degré doit être saisie ")
    .isFloat({ gt: 0 }).withMessage("Le degré doit être un nombre")
    .trim(),

  (req, res, next) => {
    const errors = validationresult(req)
    if (errors) return res.status(400).json({ errors });

    next()
  }
]



module.exports = validateProduct