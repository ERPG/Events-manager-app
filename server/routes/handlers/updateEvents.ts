import { IEvent } from './../../types/types';
const mongoose = require('mongoose');

declare var __base: any;

const EventModel = require(__base + 'models/events');

module.exports = (req, res) => {
  const id = req.body._id;

  const { title, description, date, location } = req.body;

  const object = { title, description, date, location };

  EventModel.findOneAndUpdate({ _id: id }, object)
    .then(event => {
      console.log('Event has been updated succesfully');
      res.json(event);
      return res.status(200);
    })
    .catch(err => res.status(500).json(err));
};
