import * as express from 'express';
const router = express.Router();

const addEvent = require('./handlers/addEvents');
const deleteEvent = require('./handlers/deleteEvents');
const updateEvent = require('./handlers/updateEvents');
const getEventsByDate = require('./handlers/getEventsByDate');
const getEventsByLocation = require('./handlers/getEventsByLocation');
const getAllEvents = require('./handlers/getAllEvents');

router.post('/addEvent', addEvent);
router.delete('/deleteEvent/:id', deleteEvent);
router.put('/updateEvent', updateEvent);
router.get('/getEventBylocation', getEventsByLocation);
router.get('/getEventBydate', getEventsByDate);
router.get('/allEvents', getAllEvents);

module.exports = router;
