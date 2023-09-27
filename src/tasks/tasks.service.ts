import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async findOne(id: string): Promise<Task | null> {
    return this.taskModel.findById(id).exec();
  }

  async create(task: Task): Promise<Task> {
    const createdTask = new this.taskModel(task);
    return createdTask.save();
  }

  async update(id: string, task: Task): Promise<Task | null> {
    return this.taskModel.findByIdAndUpdate(id, task, { new: true }).exec();
  }

  async remove(id: string): Promise<void> {
    await this.taskModel.findByIdAndRemove(id).exec();
  }
}
