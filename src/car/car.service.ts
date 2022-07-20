import { HttpException, Injectable } from '@nestjs/common';
import { CARS } from './car.mock';
@Injectable()
export class CarService {

    public cars = CARS;
    public  getCars(){
        return this.cars;
    }

    public  postCars(car){
        this.cars.push(car);
        return car;
    }

    public  getCarById(id:number){
        const car =  this.cars.find((car)=> car.id == id );
        console.log(car);
        if(car==null||car==undefined){

            console.error("Id not found");
            return;
        }

        return car;
    }

    public  deleteCarByID(id:number){
        const index =  this.cars.findIndex((car)=> car.id == id );
        this.cars.splice(index,1)
        if(index===-1){

            console.error("Id not found");
            return;   
        }

        return {msg:"deleated Successfully"};

    }

    public  putUpdateCarById(id:number,prop_name,prop_val){
        const index =  this.cars.findIndex((car)=> car.id == id );
        if(id==-1)
        return new HttpException("error found",404);
        this.cars[index][prop_name]=prop_val;

        // return {msg:"Invalid Id"};
        return this.cars[index];
    }
}
