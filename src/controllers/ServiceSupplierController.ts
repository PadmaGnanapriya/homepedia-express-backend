import ServiceSupplierRepository from "../repositories/ServiceSupplierRepository"
import authController from "./AuthController";
import {PERMISSION_TYPES} from "../middleware/authorization";

async function createServiceSupplier(req: any, res: any, next: any) {
  authController.createUserAccount(req.body, PERMISSION_TYPES.SERVICE_SUPPLIER, false).then((response) => {
    ServiceSupplierRepository.createServiceSupplier(req.body, response.uid)
      .then((data) => res.json(data))
      .catch(async (e) => {
        // Due to database obj creation fail we should delete firstly created firebase userAccount.
        // Otherwise, we can't use that email for second attempt.
        await authController.deleteUserAccount(response.uid);
        next(e);
      });
  }).catch((e) => next(e));
}

async function getAllServiceSuppliersForAdmin(req: any, res: any, next: any) {
  ServiceSupplierRepository.getAllServiceSuppliersForAdmin()
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function searchServiceSuppliers(req: any, res: any, next: any) {
  ServiceSupplierRepository.searchServiceSuppliers(req.query)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function approveServiceSupplierById(req: any, res: any, next: any) {
  ServiceSupplierRepository.getFirebaseUidByServiceSupplierId(req.params.id).then(async (response) => {
    await authController.toggleUserAccountStatus(response?.firebaseUID, true);
    ServiceSupplierRepository.approveServiceSupplier(req.params.id)
      .then((data) => res.json(data))
      .catch((e) => next(e));
  }).catch((e) => next(e));
}

async function updateServiceSupplier(req: any, res: any, next: any) {
  ServiceSupplierRepository.updateServiceSupplier(req.params.id, req.body)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function deleteServiceSupplier(req: any, res: any, next: any) {
  ServiceSupplierRepository.getFirebaseUidByServiceSupplierId(req.params.id).then(async (response) => {
    await authController.deleteUserAccount(req.params.firebaseId);
    ServiceSupplierRepository.deleteServiceSupplier(req.params.id)
      .then((data) => res.json(data))
      .catch((e) => next(e));
  }).catch((e) => next(e));
}

export default {
  createServiceSupplier,
  getAllServiceSuppliersForAdmin,
  searchServiceSuppliers,
  approveServiceSupplierById,
  updateServiceSupplier,
  deleteServiceSupplier,
}