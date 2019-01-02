import { ConvectorModel } from '@worldsibu/convector-core-model';
export declare class Car extends ConvectorModel<Car> {
    readonly type: string;
    make: string;
    model: string;
    colour: string;
    owner: string;
}
