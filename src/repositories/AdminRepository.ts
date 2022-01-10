import AdminModel, {Admin} from "../models/Admin";

/**
 * create new Admin in mongo db
 * @param newAdmin
 */
const createAdmin = async (newAdmin: Admin) => {
  return await AdminModel.create(
    {
      name:  `${newAdmin.firstName} ${newAdmin.lastName}`,
      email: newAdmin.email,
      contactNumber: newAdmin.contactNumber,
      address: newAdmin.address,
      status: 1,
      createdAt: new Date(),
      modifiedAt: new Date(),
    }
  );
};
/**
 * Sent all Admins
 */
const getAllAdmins = async () => {
  return AdminModel.find({status: 1}, '_id name amount');
}

/**
 * Not permanently delete from db. Change status only 1 > 3
 * @param id
 * @param Admin
 */
const updateAdmin = async (id: number, Admin:any) => {
  return AdminModel.findOneAndUpdate({_id: id}, {$set:Admin})
}

/**
 * Not permanently delete from db. Change status only 1 > 3
 * @param id
 */
const deleteAdmin = async (id: number) => {
  return AdminModel.findOneAndUpdate({_id: id}, {$set: {status: 3}})
}

export default {
  createAdmin,
  getAllAdmins,
  updateAdmin,
  deleteAdmin,
}
