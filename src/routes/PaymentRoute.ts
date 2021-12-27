import { Router } from 'express';
import PaymentController from "../controllers/PaymentController";

const paymentRoutes = Router();

paymentRoutes.post('/', PaymentController.createPayment);
paymentRoutes.get('/', PaymentController.getAllPayments);
paymentRoutes.get('/:id', PaymentController.getPaymentById);

export default paymentRoutes;

//todo: add auth middleware
// PaymentRoutes.post('/', authorization([ADMINISTRATOR]),PaymentController.createPayment);
