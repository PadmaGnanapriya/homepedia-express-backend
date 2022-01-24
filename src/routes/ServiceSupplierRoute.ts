import { Router } from 'express';
import ServiceSupplierController from "../controllers/ServiceSupplierController";
import authorization, {PERMISSION_TYPES} from "../middleware/authorization";

const serviceSupplierRoutes = Router();

serviceSupplierRoutes.post('/', authorization([PERMISSION_TYPES.ANY]), ServiceSupplierController.createServiceSupplier);
serviceSupplierRoutes.get('/search', authorization([PERMISSION_TYPES.ANY]), ServiceSupplierController.searchServiceSuppliers);
serviceSupplierRoutes.get('/', authorization([PERMISSION_TYPES.ANY]), ServiceSupplierController.getAllServiceSuppliersForAdmin);
serviceSupplierRoutes.patch('/:id', authorization([PERMISSION_TYPES.ANY]), ServiceSupplierController.updateServiceSupplier);
serviceSupplierRoutes.patch('/approve/:id', authorization([PERMISSION_TYPES.ADMINISTRATOR]), ServiceSupplierController.approveServiceSupplierById);
serviceSupplierRoutes.delete('/:id', authorization([PERMISSION_TYPES.ADMINISTRATOR]), ServiceSupplierController.deleteServiceSupplier);

export default serviceSupplierRoutes;

//todo: add auth middleware
// ServiceSupplierRoutes.post('/', authorization([ADMINISTRATOR]),ServiceSupplierController.createServiceSupplier);
