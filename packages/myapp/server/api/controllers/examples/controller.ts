import ExamplesService from '../../services/examples.service';
import { Request, Response } from 'express';
import { CarController } from '../../../smartContractControllers';

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
    console.log('test init');
    let cntrl = await CarController.init();
    console.log('init worked');
    let itemToCreate = req.body;
    await cntrl.create(itemToCreate);

    res.send(201);
  }
}
export default new Controller();
