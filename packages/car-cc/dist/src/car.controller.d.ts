import { ConvectorController } from '@worldsibu/convector-core-controller';
import { Car } from './car.model';
export declare class CarController extends ConvectorController {
    init(): Promise<void>;
    query(id: string): Promise<Car>;
    queryAll(): Promise<Car[]>;
    create(car: Car): Promise<void>;
    changeOwner(id: string): Promise<void>;
}
