import * as mongoose from 'mongoose';
import { IEvent } from '../types/types';

const collection = 'events';
const now = new Date().toLocaleDateString();

const EventSchema: mongoose.Schema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    date: { type: String, default: now },
    location: { type: String, require: true }
  },
  { collection }
);

// Export the model and return your IUser interface
module.exports = mongoose.model<IEvent>('Event', EventSchema);
