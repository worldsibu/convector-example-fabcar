import ExamplesService from '../../services/examples.service';
import { Request, Response } from 'express';
import { CarController } from '../../../smartContractControllers';
import { Models } from '../../../smartContractModels';

export class Controller {
  async all(req: Request, res: Response): Promise<void> {
    let cntrl = await CarController.init();
    let results = await cntrl.queryAll();

    res.json(results);
  }

  async byId(req: Request, res: Response) {
    let cntrl = await CarController.init();
    let result = await cntrl.query(req.params.id);

    if (!result) {
      return res.status(404);
    }
    return res.json(result);
  }

  async create(req: Request, res: Response) {
    try {
      let cntrl = await CarController.init();
      let carRaw = req.body;
      carRaw.type = 'io.worldsibu.car';
      console.log('car', carRaw);
      let car = new Models.Car(carRaw);
      await cntrl.create(car);

      res.send(201);
    } catch (ex) {
      console.log(ex.message, ex.stack);
      res.status(500).send(ex);
    }
  }
}
export default new Controller();
