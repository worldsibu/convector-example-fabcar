import * as yup from 'yup';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core-controller';

import { Car } from './car.model';

@Controller('car')
export class CarController extends ConvectorController {
  @Invokable()
  public async init(
  ) {
    // Mock data
    let mockData = [
      new Car({ id: '1', make: 'Toyota', model: 'Prius', colour: 'blue', owner: 'Tomoko' }),
      new Car({ id: '2', make: 'Ford', model: 'Mustang', colour: 'red', owner: 'Brad' }),
      new Car({ id: '3', make: 'Hyundai', model: 'Tucson', colour: 'green', owner: 'Jin Soo' }),
      new Car({ id: '4', make: 'Volkswagen', model: 'Passat', colour: 'yellow', owner: 'Max' }),
      new Car({ id: '5', make: 'Tesla', model: 'S', colour: 'black', owner: 'Adriana' }),
      new Car({ id: '6', make: 'Peugeot', model: '205', colour: 'purple', owner: 'Michel' }),
      new Car({ id: '7', make: 'Chery', model: 'S22L', colour: 'white', owner: 'Aarav' }),
      new Car({ id: '8', make: 'Fiat', model: 'Punto', colour: 'violet', owner: 'Pari' }),
      new Car({ id: '9', make: 'Tata', model: 'Nano', colour: 'indigo', owner: 'Valeria' }),
      new Car({ id: '10', make: 'Holden', model: 'Barina', colour: 'brown', owner: 'Shotaro' })]
    await Promise.all(
      mockData.map(car => car.save()));
  }
  @Invokable()
  public async query(@Param(yup.string()) id: string): Promise<Car> {
    return Car.getOne(id);
  }
  @Invokable()
  public async queryAll(): Promise<Car[]> {
    return Car.getAll();
  }

  @Invokable()
  public async create(@Param(Car) car: Car) {
    await car.save();
  }

  @Invokable()
  public async changeOwner(@Param(yup.string()) id: string) {
    let car = await Car.getOne(id);
    await car.save();
  }
}