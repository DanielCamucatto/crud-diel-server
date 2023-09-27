import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException, BadRequestException } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model'; // Certifique-se de que Task corresponda ao novo modelo
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Controller('tasks')
export class TasksController {
  constructor(
    private tasksService: TasksService,
    @InjectModel('Task') private readonly taskModel: Model<Task>,
  ) { }

  @Get()
  async findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Task> {
    return this.tasksService.findOne(id);
  }

  @Post() // Esta rota lidará com solicitações POST em http://localhost:3000/tasks
  async create(@Body() task: Omit<Task, 'id'>): Promise<Task> { // Remova o campo 'id' do tipo Task
    return this.tasksService.create(task);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() task: Omit<Task, 'id'>): Promise<Task> { // Remova o campo 'id' do tipo Task
    if (!/^[0-9a-fA-F]{24}$/.test(id)) {
      throw new BadRequestException('Invalid ID format');
    }

    const existingTask = await this.taskModel.findById(id);

    if (!existingTask) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    existingTask.title = task.title;
    existingTask.description = task.description;
    existingTask.date = task.date;
    existingTask.duration = task.duration;

    const updatedTask = await existingTask.save();

    return updatedTask;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.tasksService.remove(id);
  }
}
