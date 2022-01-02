import { Router } from 'express';
import FAQController from "../controllers/FaqController";

const faqRoutes = Router();

faqRoutes.post('/', FAQController.createFAQ);
faqRoutes.get('/', FAQController.getAllFAQs);
faqRoutes.patch('/:id', FAQController.updateFAQ);
faqRoutes.delete('/:id', FAQController.deleteFAQ);

export default faqRoutes;

//todo: add auth middleware
// FAQRoutes.post('/', authorization([ADMINISTRATOR]),FAQController.createFAQ);
