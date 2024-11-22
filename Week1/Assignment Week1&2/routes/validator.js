const { body, param, validationResult } = require('express-validator');

const contactValidatorRules = () => {
  return [
    body('name').notEmpty().withMessage('Name is require in this field'),
    body('email').notEmpty().withMessage('An email is require in this field'),
    param('id').isMongoId().withMessage('Invalid ID format'),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { contactValidatorRules, validate };
