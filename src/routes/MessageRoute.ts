import { Router } from 'express';
import MessageController from "../controllers/MessageController";

const messageRoutes = Router();

messageRoutes.post('/', MessageController.createMessage);
messageRoutes.get('/', MessageController.getAllMessages);
messageRoutes.get('/:id', MessageController.getMessageById);
messageRoutes.delete('/:id', MessageController.deleteMessage);

export default messageRoutes;

//todo: add auth middleware
// messageRoutes.post('/', authorization([ADMINISTRATOR]),MessageController.createMessage);
