import { Document, Schema } from 'mongoose';

export interface Task extends Document {
  title: string;
  description: string;
  date: Date;
  duration: number;
}

export const TaskSchema = new Schema<Task>({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  duration: { type: Number, required: true },
});

