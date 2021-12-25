import { Router } from 'express';
import ServiceSupplierController from "../controllers/ServiceSupplierController";

const serviceSupplierRoutes = Router();

serviceSupplierRoutes.post('/', ServiceSupplierController.createServiceSupplier);
serviceSupplierRoutes.get('/?type=all-for-admin', ServiceSupplierController.getAllServiceSuppliersForAdmin);
serviceSupplierRoutes.get('/?type=by-service-type', ServiceSupplierController.getAllNonExpiredServiceSuppliersByServiceType);
serviceSupplierRoutes.get('/?type=by-service-area', ServiceSupplierController.getAllNonExpiredServiceSuppliersByArea);
serviceSupplierRoutes.get('/?type=vip', ServiceSupplierController.getAllNonExpiredVipServiceSuppliers);
serviceSupplierRoutes.get('/:id', ServiceSupplierController.getServiceSupplierById);
serviceSupplierRoutes.patch('/:id', ServiceSupplierController.updateServiceSupplier);
serviceSupplierRoutes.delete('/:id', ServiceSupplierController.deleteServiceSupplier);

export default serviceSupplierRoutes;

//todo: add auth middleware
// ServiceSupplierRoutes.post('/', authorization([ADMINISTRATOR]),ServiceSupplierController.createServiceSupplier);
