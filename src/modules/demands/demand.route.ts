import { Router } from 'express';
import { createDemandController } from './demand.controller';
import { Authenticate } from "../../middleware/auth.middleware";

const demandRouter = Router();

demandRouter.post("/demands", Authenticate, createDemandController);

export default demandRouter