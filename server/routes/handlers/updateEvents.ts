import { IEvent } from './../../types/types';
const mongoose = require('mongoose');

declare var __base: any;

const EventModel = require(__base + 'models/events');

module.exports = (req, res) => {
  const { id } = req.params;
  const { title, description, date, location } = req.body;

  EventModel.findByIdAndUpdate(id, { title, description, date, location })
    .then(event => {
      console.log('Event has been updated succesfully');
      res.json(event);
    })
    .catch(err => res.json({ success: false, msg: 'Error updating user' }));
};
