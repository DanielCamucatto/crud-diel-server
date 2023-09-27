import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://danielcamucatto:FyxK09edxCHc4xTG@cluster0.ktwbumi.mongodb.net/?retryWrites=true&w=majority'),
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
