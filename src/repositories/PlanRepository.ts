import PlanModel, {Plan} from "../models/Plan";

/**
 * create new Plan in mongo db
 * @param newPlan
 */
const createPlan = async (newPlan: Plan) => {
  return await PlanModel.create(
    {
      name: newPlan.name,
      amount: newPlan.amount,
      status: 1,
      createdAt: new Date(),
      modifiedAt: new Date(),
    }
  );
};
/**
 * Sent all Plans
 */
const getAllPlans = async () => {
  return PlanModel.find({status: 1}, '_id name amount');
}

/**
 * Not permanently delete from db. Change status only 1 > 3
 * @param id
 * @param plan
 */
const updatePlan = async (id: number, plan:any) => {
  return PlanModel.findOneAndUpdate({_id: id}, {$set:plan})
}

/**
 * Not permanently delete from db. Change status only 1 > 3
 * @param id
 */
const deletePlan = async (id: number) => {
  return PlanModel.findOneAndUpdate({_id: id}, {$set: {status: 3}})
}

export default {
  createPlan,
  getAllPlans,
  updatePlan,
  deletePlan,
}
