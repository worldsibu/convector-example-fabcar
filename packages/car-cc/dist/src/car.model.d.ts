import { ConvectorModel } from '@worldsibu/convector-core-model';
export declare class Car extends ConvectorModel<Car> {
    init(make: string, model: string, colour: string, owner: string): this;
    readonly type: string;
    make: string;
    model: string;
    colour: string;
    owner: string;
}
