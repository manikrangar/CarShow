import { Module } from '@nestjs/common';

import { CarController } from './car.controller';
import { CARS } from './car.mock';
import { CarService } from './car.service';

@Module({
  controllers: [CarController],
  providers: [CarService]
})
export class CarModule {

}
