import { Router } from 'express';
import FAQController from "../controllers/FaqController";
import authorization, {PERMISSION_TYPES} from "../middleware/authorization";

const faqRoutes = Router();

faqRoutes.post('/', authorization([PERMISSION_TYPES.ADMINISTRATOR]), FAQController.createFAQ);
faqRoutes.get('/',authorization([PERMISSION_TYPES.ANY]), FAQController.getAllFAQs);
faqRoutes.patch('/:id',authorization([PERMISSION_TYPES.ADMINISTRATOR]), FAQController.updateFAQ);
faqRoutes.delete('/:id', authorization([PERMISSION_TYPES.ADMINISTRATOR]), FAQController.deleteFAQ);

export default faqRoutes;

//todo: add auth middleware
// FAQRoutes.post('/', authorization([ADMINISTRATOR]),FAQController.createFAQ);
