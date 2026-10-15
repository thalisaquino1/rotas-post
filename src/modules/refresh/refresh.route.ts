import { Router } from 'express';
import { refreshToken } from './refresh.controller'

const refreshRouter = Router();

refreshRouter.post('/auth/refresh', refreshToken);

export { refreshRouter }