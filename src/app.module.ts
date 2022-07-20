import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.module';
import {MongooseModule} from '@nestjs/mongoose'
// these are decorators

@Module({
  imports: [CarModule,MongooseModule.forRoot('mongodb+srv://manikrangar:12345678910111213@cluster0.47o6nu7.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
