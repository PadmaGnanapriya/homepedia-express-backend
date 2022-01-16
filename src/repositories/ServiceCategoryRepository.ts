import ServiceCategoryModel, {ServiceCategory} from "../models/ServiceCategory";

/**
 * create new ServiceCategory in mongo db
 * @param newServiceCategory
 */

const createServiceCategory = async (newServiceCategory: ServiceCategory) => {
  return await ServiceCategoryModel.create(
    {
      name: newServiceCategory.name,
      icon: newServiceCategory.icon,
      status: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  );
};
/**
 * Sent all ServiceCategories
 */
const getAllServiceCategories = async () => {
  return ServiceCategoryModel.find({status: 1}, '_id name icon');
}

/**
 * update service category
 * @param id
 * @param serviceCategory
 */
const updateServiceCategory = async (id: any, serviceCategory: any) => {
  return ServiceCategoryModel.findOneAndUpdate({_id: id},
    {$set: {name: serviceCategory.name, updatedBy: serviceCategory.updatedBy, updatedAt: new Date()}})
}

/**
 * Not permanently delete from db. Change status only 1 > 3
 * @param id
 */
const deleteServiceCategory = async (id: any) => {
  return ServiceCategoryModel.findOneAndUpdate({_id: id}, {$set: {status: 3, updatedAt: new Date()}})
}

export default {
  createServiceCategory,
  getAllServiceCategories,
  updateServiceCategory,
  deleteServiceCategory,
}
