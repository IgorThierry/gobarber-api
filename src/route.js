import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ hello: 'stack' }));

export default routes;
