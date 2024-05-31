const path = require('path');
const fs = require('fs');

class Reservation {
    constructor(id, firstName, lastName, email, eventId) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName
        this.email = email;
        this.eventId = eventId;
    }

    static read() {
        const filePath = path.join(__dirname, '../db/reservations.json');
        const reservation = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(reservation);
    }

    static reservation(id) {
        const reservation = this.read().filter(reservation => reservation.eventId == id);
        console.log(reservation);
        return reservation
    }
    
    static add(newReservation){
        const filePath = path.join(__dirname, '../db/reservations.json');
        fs.writeFileSync(filePath, JSON.stringify([this.reservation(), newReservation]));
    }


}

module.exports = Reservation;