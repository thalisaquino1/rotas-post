import { Router } from 'express';
import { createDemandController } from './demand.controller'

const demandRouter = Router();

demandRouter.post("/demands", createDemandController);

export default demandRouter