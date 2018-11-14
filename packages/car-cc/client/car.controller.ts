import * as yup from 'yup';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core-controller';

import { Car } from '../src/car.model';
import { ControllerAdapter } from '@worldsibu/convector-core-adapter';


export class CarControllerClient extends ConvectorController {
  public name = 'car';

  constructor(public adapter: ControllerAdapter, public user?: string) {
    super()
  }

  
  public async init(
  ) {

          return await this.adapter.invoke(this.name, 'init', this.user, );
        
  }
  
  public async query(id: string): Promise<Car> {

          return await this.adapter.invoke(this.name, 'query', this.user, id);
        
  }
  
  public async queryAll(): Promise<Car[]> {

          return await this.adapter.invoke(this.name, 'queryAll', this.user, );
        
  }

  
  public async create(car: Car) {

          return await this.adapter.invoke(this.name, 'create', this.user, car);
        
  }

  
  public async changeOwner(id: string) {

          return await this.adapter.invoke(this.name, 'changeOwner', this.user, id);
        
  }
}