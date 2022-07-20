import { CarService } from './car.service';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

// this is a routing file
// we have to inject the service to the car controller 
// for that we have to create a constructor ans put th private arg in the constructor
@Controller('car') //this will make a route /car
export class CarController {

    constructor(private carService: CarService){}
    
    @Get()
    public getCar(){
        return this.carService.getCars();
    }

    @Post()
    public postCars(@Body() car){
        
        return this.carService.postCars(car);
    }

    @Get(":id")
    public getCarById(@Param('id') id:number ){
        return this.carService.getCarById(id);
    }

    @Delete(':id')
    public deleteCarByID(@Param('id') id:number){
        return this.carService.deleteCarByID(id);

    }

    @Put(":id")
    public putUpdateCarById(@Param('id') id:number, @Query() query){
        return this.carService.putUpdateCarById(id,query.property_name,query.property_value)
    }

    

}
