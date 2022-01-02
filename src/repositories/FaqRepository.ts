import FAQModel, {FAQ} from "../models/FAQ";

/**
 * create new FAQ in mongo db
 * @param newFAQ
 */
const createFAQ = async (newFAQ: FAQ) => {
  return await FAQModel.create(
    {
      indexNo: newFAQ.indexNo || 1,
      question: newFAQ.question,
      answer: newFAQ.answer,
      status: 1,
      createdAt: new Date(),
      modifiedAt: new Date(),
    }
  );
};

/**
 * Sent all FAQs
 */
const getAllFAQs = async () => {
  return FAQModel.find({status: 1}, '_id question answer', {sort: {'indexNo': -1}});
}

/**
 * Not permanently delete from db. Change status only 1 > 3
 * @param id
 * @param FAQ
 */
const updateFAQ = async (id: number, FAQ:any) => {
  return FAQModel.findOneAndUpdate({_id: id}, {$set:FAQ})
}

/**
 * Not permanently delete from db. Change status only 1 > 3
 * @param id
 */
const deleteFAQ = async (id: number) => {
  return FAQModel.findOneAndUpdate({_id: id}, {$set: {status: 3}})
}

export default {
  createFAQ,
  getAllFAQs,
  updateFAQ,
  deleteFAQ,
}
