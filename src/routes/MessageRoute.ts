import { Router } from 'express';
import MessageController from "../controllers/MessageController";
import authorization, {PERMISSION_TYPES} from "../middleware/authorization";

const messageRoutes = Router();

messageRoutes.post('/',authorization([PERMISSION_TYPES.ANY]), MessageController.createMessage);
messageRoutes.get('/',authorization([PERMISSION_TYPES.ANY]), MessageController.getAllMessages);
messageRoutes.get('/:id',authorization([PERMISSION_TYPES.ANY]), MessageController.getMessageById);
messageRoutes.delete('/:id', authorization([PERMISSION_TYPES.ADMINISTRATOR]), MessageController.deleteMessage);

export default messageRoutes;

//todo: add auth middleware
// messageRoutes.post('/', authorization([ADMINISTRATOR]),MessageController.createMessage);
