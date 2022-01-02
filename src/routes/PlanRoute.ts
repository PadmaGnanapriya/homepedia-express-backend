import {Router} from 'express';
import PlanController from "../controllers/PlanController";
import authorization, {PERMISSION_TYPES} from "../middleware/authorization";

const PlanRoutes = Router();

PlanRoutes.post('/', authorization([PERMISSION_TYPES.ADMINISTRATOR]), PlanController.createPlan);
PlanRoutes.get('/', authorization([PERMISSION_TYPES.ANY]), PlanController.getAllPlans);
PlanRoutes.patch('/:id', authorization([PERMISSION_TYPES.ADMINISTRATOR]), PlanController.updatePlan);
PlanRoutes.delete('/:id', authorization([PERMISSION_TYPES.ADMINISTRATOR]), PlanController.deletePlan);

export default PlanRoutes;

