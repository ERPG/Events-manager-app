import { IEvent } from './../../types/types';
const mongoose = require('mongoose');

declare var __base: any;

const EventModel = require(__base + 'models/events');

module.exports = (req, res) => {
  const id = req.params.id;

  EventModel.findByIdAndRemove(id)
    .then(event => {
      console.log('Event has been removed succesfully');
      return res.status(200).json(event);
    })
    .catch(err => res.status(500).json(err));
};
