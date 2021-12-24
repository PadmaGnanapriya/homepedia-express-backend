import MessageRepository from "../repositories/MessageRepository"

async function createMessage(req: any, res: any, next: any) {
  MessageRepository.createMessage(req.body)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function getAllMessages(req: any, res: any, next: any) {
  MessageRepository.getAllMessages()
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function getMessageById(req: any, res: any, next: any) {
  MessageRepository.getMessageById(req.params.id)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function deleteMessage(req: any, res: any, next: any) {
  MessageRepository.deleteMessage(req.params.id)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

export default {
  createMessage,
  getAllMessages,
  getMessageById,
  deleteMessage
}

// TODO: read req.body, query param and pass them properly, pagination
