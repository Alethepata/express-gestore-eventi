const Reservation = require('../models/reservations.js');

const index = (req, res) => {
    const reservation = Reservation.reservation(req.params.id);
    res.json(reservation);
}

const store = (req, res) => {
    const { id, firstName, lastName, email } = req.body;

    const eventId = req.params.id;

    const newReservation = new Reservation(id, firstName, lastName, email, eventId);

    Reservation.add(newReservation);

    res.json(newReservation);
}

const destroy = (req, res) => {
    res.json('eliminato');
}

module.exports= {
    index,
    store,
    destroy
}