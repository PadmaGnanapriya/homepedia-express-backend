import { Router } from 'express';
import ServiceSupplierController from "../controllers/ServiceSupplierController";

const serviceSupplierRoutes = Router();

serviceSupplierRoutes.post('/', ServiceSupplierController.createServiceSupplier);
serviceSupplierRoutes.get('/for-admin', ServiceSupplierController.getAllServiceSuppliersForAdmin);
serviceSupplierRoutes.get('/by-type', ServiceSupplierController.getAllNonExpiredServiceSuppliersByServiceType);
serviceSupplierRoutes.get('/by-area', ServiceSupplierController.getAllNonExpiredServiceSuppliersByArea);
serviceSupplierRoutes.get('/vip', ServiceSupplierController.getAllNonExpiredVipServiceSuppliers);
serviceSupplierRoutes.get('/:id', ServiceSupplierController.getServiceSupplierById);
serviceSupplierRoutes.patch('/:id', ServiceSupplierController.updateServiceSupplier);
serviceSupplierRoutes.patch('/approve/:id', ServiceSupplierController.approveServiceSupplierById);
serviceSupplierRoutes.delete('/:id', ServiceSupplierController.deleteServiceSupplier);

export default serviceSupplierRoutes;

//todo: add auth middleware
// ServiceSupplierRoutes.post('/', authorization([ADMINISTRATOR]),ServiceSupplierController.createServiceSupplier);
