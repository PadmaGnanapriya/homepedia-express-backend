import { Router } from 'express';
import visitorController from '../controllers/visitorController';

const visitorRoutes = Router();

visitorRoutes.post('/', visitorController.saveVisit);

export default visitorRoutes;

