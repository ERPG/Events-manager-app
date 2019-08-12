import { Document } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  description: string;
  date: string;
  location: string;
}
