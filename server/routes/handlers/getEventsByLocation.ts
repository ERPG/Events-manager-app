import { IEvent } from './../../types/types';
const mongoose = require('mongoose');

declare var __base: any;

const EventModel = require(__base + 'models/events');

module.exports = (req, res) => {
  const { location } = req.body;

  EventModel.find({ location })
    .then(event => {
      console.log('Event by location has been sent succesfully');
      res.json(event);
    })
    .catch(err => res.status(500).json(err));
};
