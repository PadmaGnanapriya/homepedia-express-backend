import {Router} from 'express';
import AdminController from "../controllers/AdminController";
import authorization, {PERMISSION_TYPES} from "../middleware/authorization";

const adminRoutes = Router();

adminRoutes.post('/', authorization([PERMISSION_TYPES.ADMINISTRATOR]), AdminController.createAdmin);
adminRoutes.get('/', authorization([PERMISSION_TYPES.ADMINISTRATOR]), AdminController.getAllAdmins);
adminRoutes.patch('/:id', authorization([PERMISSION_TYPES.ADMINISTRATOR]), AdminController.updateAdmin);
adminRoutes.delete('/:id', authorization([PERMISSION_TYPES.ADMINISTRATOR]), AdminController.deleteAdmin);

export default adminRoutes;

