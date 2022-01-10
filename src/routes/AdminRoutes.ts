import { Router } from 'express';
import AdminController from "../controllers/AdminController";

const adminRoutes = Router();

adminRoutes.post('/', AdminController.createAdmin);
adminRoutes.get('/', AdminController.getAllAdmins);
adminRoutes.patch('/:id', AdminController.updateAdmin);
adminRoutes.delete('/:id', AdminController.deleteAdmin);

export default adminRoutes;

//todo: add auth middleware
// AdminRoutes.post('/', authorization([ADMINISTRATOR]),AdminController.createAdmin);
