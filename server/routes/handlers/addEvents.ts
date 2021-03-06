import { IEvent } from './../../types/types';
const mongoose = require('mongoose');

declare var __base: any;

const EventModel = require(__base + 'models/events');

module.exports = (req, res) => {
  const { title, description, date, location } = req.body;
  const event = new EventModel({ title, description, date, location });

  event
    .save()
    .then(event => {
      return res.status(200).json(event);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};
