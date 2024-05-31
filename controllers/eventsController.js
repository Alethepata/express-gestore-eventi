const Event = require('../models/events.js');

const index = (req, res) => {
    const events = Event.events();
    res.json(events);
}

const store = (req, res) => {
    const { id, title, description, date, maxSeats } = req.body;

    const newEvents = new Event(id, title, description, date, maxSeats);

    Event.add(newEvents);
    
    res.redirect('/events');
}

const update = (req, res) => {
    const event = Event.id(req.params.id);
    res.json(event); 
}

module.exports = {
    index,
    store,
    update
}