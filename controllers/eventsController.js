const Event = require('../models/events.js');

const index = (req, res) => {
    const events = Event.events();
    res.json(events);
}

const store = (req, res) => {
    
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