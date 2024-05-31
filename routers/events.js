const express = require('express');
const router = express.Router();

const {index, store, update} = require('../controllers/eventsController.js');

router.get('/', index);

router.post('/', store);

router.put('/:id', update);

module.exports = router;