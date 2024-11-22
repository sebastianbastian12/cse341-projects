/*const express = require('express');
const router = express.Router();

const contactsControllers = require('../../../controllers/contacts');

router.get('/', contactsControllers.getAll);
router.get('/:id', contactsControllers.getSingle);
router.post('/', contactsControllers.createContact);
router.put('/:id', contactsControllers.updateContact);
router.delete('/:id', contactsControllers.deleteContact);

module.exports = router;*/

const express = require('express');
const { param } = require('express-validator');
const router = express.Router();
const { contactValidatorRules, validate } = require('./validator');
const contactsControllers = require('../../../controllers/contacts');

router.get('/', contactsControllers.getAll);
router.get(
  '/:id',
  param('id').isMongoId().withMessage('Invalid ID format'),
  validate,
  contactsControllers.getSingle
);
router.post(
  '/',
  contactValidatorRules(),
  validate,
  contactsControllers.createContact
);
router.put(
  '/:id',
  contactValidatorRules(),
  validate,
  contactsControllers.updateContact
);
router.delete(
  '/:id',
  param('id').isMongoId().withMessage('Invalid ID format'),
  validate,
  contactsControllers.deleteContact
);

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

module.exports = router;
