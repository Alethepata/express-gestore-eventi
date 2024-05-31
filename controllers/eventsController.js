const Event = require('../models/events.js');

const index = (req, res) => {
    const events = Event.events();

    const titleFilter = req.query.title;
    const dateFilter = req.query.date;

    if (titleFilter) {
        const event = events.filter(event => event.title.toLowerCase() === titleFilter);
        return res.json(event);  
    }else if (dateFilter) {
        const event = events.filter(event => event.date === dateFilter);
        return res.json(event);  
    }


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