const express = require("express");
const router = express.Router();

const contactsControllers = require('../../../controllers/contacts');

router.get('/', contactsControllers.getAll);
router.get('/:id', contactsControllers.getSingle);

module.exports = router;