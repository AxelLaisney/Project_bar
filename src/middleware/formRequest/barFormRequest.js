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

    body("adresse")
    .notEmpty().withMessage("L'adresse doit être saisie ")
    .isString().withMessage("L'adresse doit être un string")
    .trim(),

  body("tel")
    .notEmpty().withMessage("Le numéro de téléphone doit être saisie ")
    .isFloat({ gt: 0 }).withMessage("Le numéro de téléphone être des nombres")
    .trim(),

    body("email")
    .notEmpty().withMessage("L'email doit être saisie ")
    .isString().withMessage("L'email doit être un string")
    .trim(),

  (req, res, next) => {
    const errors = validationresult(req)
    if (errors) return res.status(400).json({ errors });

    next()
  }
]



module.exports = validateProduct