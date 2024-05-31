const path = require('path');
const fs = require('fs');

class Event {
    constructor(id, title, description, date, maxSeats) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.maxSeats = maxSeats;
    }
    
    static read() {
        const filePath = path.join(__dirname, '../db/events.json');
        const events = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(events);
    }
    
    static add(newEvents){
        const filePath = path.join(__dirname, '../db/events.json');
        fs.writeFileSync(filePath, JSON.stringify([this.events(), newEvents]));
    }

    static events() {
        return this.read();
    }

    static id(id) {
        const events = this.events();
        const event = events.find(event => event.id === parseInt(id));
        return event
    }
}

module.exports = Event
