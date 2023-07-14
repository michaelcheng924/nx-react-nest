import { Module } from '@nestjs/common';
import { TodosModule } from '../todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI), TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
