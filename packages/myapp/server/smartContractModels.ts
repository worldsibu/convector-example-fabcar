import { BaseStorage } from '@worldsibu/convector-core-storage';
import { CouchDBStorage } from '@worldsibu/convector-storage-couchdb';
import { Car as CarModel } from 'car-cc/client';

BaseStorage.current = new CouchDBStorage({
    host: process.env.COUCHDB_HOST,
    protocol: process.env.COUCHDB_PROTOCOL,
    port: process.env.COUCHDB_PORT
}, process.env.COUCHDBVIEW);


export namespace Models {
    CarModel.getAll
    export const Car = CarModel;
}