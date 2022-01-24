import { Router } from 'express';
import visitorController from '../controllers/visitorController';
import authorization, {PERMISSION_TYPES} from "../middleware/authorization";

const visitorRoutes = Router();

visitorRoutes.post('/', authorization([PERMISSION_TYPES.ADMINISTRATOR]), visitorController.saveVisit);

export default visitorRoutes;

