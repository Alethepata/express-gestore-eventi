const express = require('express');
const router = express.Router();

const { index, store, update } = require('../controllers/eventsController.js');

const reservationsControllers = require('../controllers/reservationsControllers.js');

router.get('/', index);

router.post('/', store);

router.put('/:id', update);

router.get('/:id/reservations', reservationsControllers.index)

router.post('/:id/reservations', reservationsControllers.store)

router.delete('/:id/reservations/:reservationsId', reservationsControllers.destroy)

module.exports = router;