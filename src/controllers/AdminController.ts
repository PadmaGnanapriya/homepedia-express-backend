import AdminRepository from "../repositories/AdminRepository"
import authController from "./AuthController";
import {PERMISSION_TYPES} from "../middleware/authorization";

async function createAdmin(req: any, res: any, next: any) {
  authController.createUserAccount(req.body, PERMISSION_TYPES.ADMINISTRATOR, false).then((response) => {
    AdminRepository.createAdmin(req.body)
    .then((data) => res.json(data))
    .catch((e) => next(e));
  }).catch((e) => next(e));
}

async function getAllAdmins(req: any, res: any, next: any) {
  AdminRepository.getAllAdmins()
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function updateAdmin(req: any, res: any, next: any) {
  AdminRepository.updateAdmin(req.params.id, req.body)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function deleteAdmin(req: any, res: any, next: any) {
  AdminRepository.deleteAdmin(req.params.id)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

export default {
  createAdmin,
  getAllAdmins,
  updateAdmin,
  deleteAdmin
}

// TODO: read req.body, query param and pass them properly, pagination
