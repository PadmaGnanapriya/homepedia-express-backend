import { Router } from 'express';
import ServiceCategoryController from "../controllers/ServiceCategoryController";

const serviceCategoryRoutes = Router();

serviceCategoryRoutes.post('/', ServiceCategoryController.createServiceCategory);
serviceCategoryRoutes.get('/', ServiceCategoryController.getAllServiceCategories);
serviceCategoryRoutes.patch('/:id', ServiceCategoryController.updateServiceCategory);
serviceCategoryRoutes.delete('/:id', ServiceCategoryController.deleteServiceCategory);

export default serviceCategoryRoutes;

//todo: add auth middleware
// serviceCategoryRoutes.post('/', authorization([ADMINISTRATOR]),ServiceCategoryController.createServiceCategory);
