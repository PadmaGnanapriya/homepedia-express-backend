import MessageModel, {Message} from "../models/Message";

/**
 * create new Message in mongo db
 * @param newMessage
 */
const createMessage = async (newMessage: Message) => {
  return await MessageModel.create(
    {
      name: newMessage.name,
      email: newMessage.email,
      message: newMessage.message,
      status: 1,
      createdAt: new Date()
    }
  );
};
/**
 * Sent all Messages
 */
const getAllMessages = async () => {
  return MessageModel.find({status: 1}, '_id name email message');
}

/**
 * the founded Message will sent
 * @param id
 */
const getMessageById = async (id: number) => {
  return MessageModel.findOne({_id: id, status: 1});
}

/**
 * Not permanently delete from db. Change status only 1 > 3
 * @param id
 */
const deleteMessage = async (id: number) => {
  return MessageModel.findOneAndUpdate({_id: id}, {$set: {status: 3}})
}

export default {
  createMessage,
  getAllMessages,
  getMessageById,
  deleteMessage,
}
