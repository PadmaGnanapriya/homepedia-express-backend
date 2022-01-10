import { Router } from 'express';
import ServiceSupplierController from "../controllers/ServiceSupplierController";

const serviceSupplierRoutes = Router();

serviceSupplierRoutes.post('/', ServiceSupplierController.createServiceSupplier);
serviceSupplierRoutes.get('/search', ServiceSupplierController.searchServiceSuppliers);
serviceSupplierRoutes.get('/', ServiceSupplierController.getAllServiceSuppliersForAdmin);
serviceSupplierRoutes.patch('/:id', ServiceSupplierController.updateServiceSupplier);
serviceSupplierRoutes.patch('/approve/:id', ServiceSupplierController.approveServiceSupplierById);
serviceSupplierRoutes.delete('/:id', ServiceSupplierController.deleteServiceSupplier);

export default serviceSupplierRoutes;

//todo: add auth middleware
// ServiceSupplierRoutes.post('/', authorization([ADMINISTRATOR]),ServiceSupplierController.createServiceSupplier);
