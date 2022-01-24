import { Router } from 'express';
import PaymentController from "../controllers/PaymentController";
import authorization, {PERMISSION_TYPES} from "../middleware/authorization";

const paymentRoutes = Router();

paymentRoutes.post('/',authorization([PERMISSION_TYPES.ANY]), PaymentController.createPayment);
paymentRoutes.get('/', authorization([PERMISSION_TYPES.ADMINISTRATOR]), PaymentController.getAllPayments);
paymentRoutes.get('/:id', authorization([PERMISSION_TYPES.ADMINISTRATOR]), PaymentController.getPaymentById);

export default paymentRoutes;

//todo: add auth middleware
// PaymentRoutes.post('/', authorization([ADMINISTRATOR]),PaymentController.createPayment);
