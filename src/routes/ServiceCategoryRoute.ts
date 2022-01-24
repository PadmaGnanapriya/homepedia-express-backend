import { Router } from 'express';
import ServiceCategoryController from "../controllers/ServiceCategoryController";
import authorization, {PERMISSION_TYPES} from "../middleware/authorization";

const serviceCategoryRoutes = Router();

serviceCategoryRoutes.post('/', authorization([PERMISSION_TYPES.ADMINISTRATOR]), authorization([PERMISSION_TYPES.ADMINISTRATOR]), ServiceCategoryController.createServiceCategory);
serviceCategoryRoutes.get('/', authorization([PERMISSION_TYPES.ANY]), ServiceCategoryController.getAllServiceCategories);
serviceCategoryRoutes.patch('/:id', authorization([PERMISSION_TYPES.ADMINISTRATOR]), ServiceCategoryController.updateServiceCategory);
serviceCategoryRoutes.delete('/:id', authorization([PERMISSION_TYPES.ADMINISTRATOR]), authorization([PERMISSION_TYPES.ADMINISTRATOR]), ServiceCategoryController.deleteServiceCategory);

export default serviceCategoryRoutes;