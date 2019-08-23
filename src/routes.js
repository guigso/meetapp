import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import auth from './app/middlewares/auth';

const routes = new Router();

routes.post('/auth', SessionController.store);
routes.post('/users', UserController.store);

routes.use(auth);
routes.put('/users', UserController.update);

export default routes;
