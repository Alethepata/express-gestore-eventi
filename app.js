const express = require('express');
const app = express();
const port = 3000;

const { notFound, serverError } = require('./middleware/errors.js')

const eventsRouter = require('./routers/events.js');

app.use(express.json());

app.use('/events', eventsRouter);

app.use(notFound);

app.use(serverError);

app.listen(port, () => {
    console.log('Server Online');
});