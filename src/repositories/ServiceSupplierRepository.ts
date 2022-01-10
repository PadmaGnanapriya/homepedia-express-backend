import ServiceSupplierModel, {ServiceSupplier} from "../models/ServiceSupplier";

const readingServiceSupplierFields = '_id fullName email gender contactNumber workingArea serviceTypes image rate';

/**
 * create new ServiceSupplier in mongo db
 * @param newServiceSupplier
 * @param uid
 */
const createServiceSupplier = async (newServiceSupplier: ServiceSupplier, uid: string) => {
  return await ServiceSupplierModel.create(
    {
      firebaseUID: uid,
      fullName: newServiceSupplier.fullName,
      nic: newServiceSupplier.nic,
      contactNumber: newServiceSupplier.contactNumber,
      email: newServiceSupplier.email,
      image: newServiceSupplier.image,
      gender: newServiceSupplier.gender,
      address: newServiceSupplier.address,
      workingArea: newServiceSupplier.workingArea,
      workingTimeStart: newServiceSupplier.workingTimeStart,
      workingTimeEnd: newServiceSupplier.workingTimeEnd,
      serviceTypes: newServiceSupplier.serviceTypes,
      copyOfCertificate: newServiceSupplier.copyOfCertificate, // images urls
      workingExperience: newServiceSupplier.workingExperience,
      selectedPlan: newServiceSupplier.selectedPlan,
      isVip: newServiceSupplier.isVip,
      expiredDate: newServiceSupplier.expiredDate,
      rate: 0,
      status: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  );
};

/**
 * Sent all ServiceSuppliers
 */
const getAllServiceSuppliersForAdmin = async () => {
  return ServiceSupplierModel.find();
}

/**
 * Sent all non expired ServiceSuppliers by service type
 */

const searchServiceSuppliers = async (queryParams: any) => {
  let query:any = {status: 1, expiredDate: {$lte: new Date()}};
  let limitOption:any = null;
  const {id, workingArea, serviceCategory, isVip, limit} = queryParams;

  if(workingArea){
    query.workingArea = workingArea;
  }
  if(serviceCategory){
    query.serviceTypes = { "$in" : [serviceCategory]};
  }
  if(isVip){
    query.isVip = isVip;
  }
  if(limit){
    limitOption = {limit: limit}
  }
  if(id){
    return ServiceSupplierModel.findOne({status: 1,expiredDate: {$lte: new Date()},_id: id}, readingServiceSupplierFields);
  }else {
    return ServiceSupplierModel.find(query, readingServiceSupplierFields, limitOption);
  }
}

const approveServiceSupplier = async (id: any) => {
  return ServiceSupplierModel.findOneAndUpdate({_id: id},{$set: {status: 1}}) // Dynamically update field which will send by frontend.
}
/**
 * update service category
 * @param id
 * @param serviceSupplier
 */
const updateServiceSupplier = async (id: any, serviceSupplier: any) => {
  return ServiceSupplierModel.findOneAndUpdate({_id: id},
    {$set: serviceSupplier}) // Dynamically update field which will send by frontend.
}
/**
 * Not permanently delete from db. Change status only 1 > 3
 * @param id
 */
const deleteServiceSupplier = async (id: any) => {
  return ServiceSupplierModel.findOneAndUpdate({_id: id}, {$set: {status: 3, updatedAt: new Date()}})
}

const getFirebaseUidByServiceSupplierId =async (id: any) => {
  return ServiceSupplierModel.findOne({_id: id}, 'firebaseUID')
}

export default {
  createServiceSupplier,
  getAllServiceSuppliersForAdmin,
  searchServiceSuppliers,
  approveServiceSupplier,
  updateServiceSupplier,
  deleteServiceSupplier,
  getFirebaseUidByServiceSupplierId,
}
