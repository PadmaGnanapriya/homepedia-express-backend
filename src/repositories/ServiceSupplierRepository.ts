import ServiceSupplierModel, {ServiceSupplier} from "../models/ServiceSupplier";

const readingServiceSupplierFields = '_id fullName email gender contactNumber workingArea serviceTypes';
/**
 * create new ServiceSupplier in mongo db
 * @param newServiceSupplier
 */

const createServiceSupplier = async (newServiceSupplier: ServiceSupplier) => {
  return await ServiceSupplierModel.create(
    {
      _id: newServiceSupplier._id,
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
      paymentType: newServiceSupplier.paymentType,
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
// TODO: Filter by if given contain service type the serviceTypes array.
const getAllNonExpiredServiceSuppliersByServiceType = async (serviceType: string) => {
  return ServiceSupplierModel.find({status: 1, expiredDate: {$lte: new Date()}, serviceTypes: serviceType},
    readingServiceSupplierFields);
}

/**
 * Sent all non expired ServiceSuppliers by area
 */
const getAllNonExpiredServiceSuppliersByArea = async (workingArea: string) => {
  return ServiceSupplierModel.find({
    status: 1,
    expiredDate: {$lte: new Date()},
    workingArea
  }, readingServiceSupplierFields);
}

/**
 * Sent all non expired vip ServiceSuppliers
 */
const getAllNonExpiredVipServiceSuppliers = async () => {
  return ServiceSupplierModel.find({
    status: 1,
    expiredDate: {$lte: new Date()},
    isVip: true
  }, readingServiceSupplierFields);
}


/**
 * Sent all non expired ServiceSupplier by Id
 */
const getServiceSupplierById = async (id: number) => {
  return ServiceSupplierModel.findOne({
    status: 1,
    expiredDate: {$lte: new Date()},
    _id: id
  }, readingServiceSupplierFields);
}

/**
 * update service category
 * @param id
 * @param serviceSupplier
 */
const updateServiceSupplier = async (id: number, serviceSupplier: any) => {
  return ServiceSupplierModel.findOneAndUpdate({_id: id},
    {$set: serviceSupplier}) // Dynamically update field which will send by frontend.
}

/**
 * Not permanently delete from db. Change status only 1 > 3
 * @param id
 */
const deleteServiceSupplier = async (id: number) => {
  return ServiceSupplierModel.findOneAndUpdate({_id: id}, {$set: {status: 3, updatedAt: new Date()}})
}

export default {
  createServiceSupplier,
  getAllServiceSuppliersForAdmin,
  getAllNonExpiredServiceSuppliersByServiceType,
  getAllNonExpiredServiceSuppliersByArea,
  getAllNonExpiredVipServiceSuppliers,
  getServiceSupplierById,
  updateServiceSupplier,
  deleteServiceSupplier,
}
