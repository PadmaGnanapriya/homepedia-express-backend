import ServiceSupplierRepository from "../repositories/ServiceSupplierRepository"

async function createServiceSupplier(req: any, res: any, next: any) {
  ServiceSupplierRepository.createServiceSupplier(req.body)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function getAllServiceSuppliersForAdmin(req: any, res: any, next: any) {
  ServiceSupplierRepository.getAllServiceSuppliersForAdmin()
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function getAllNonExpiredServiceSuppliersByServiceType(req: any, res: any, next: any) {
  ServiceSupplierRepository.getAllNonExpiredServiceSuppliersByServiceType(req.query.service)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function getAllNonExpiredServiceSuppliersByArea(req: any, res: any, next: any) {
  ServiceSupplierRepository.getAllNonExpiredServiceSuppliersByArea(req.query.area)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function getAllNonExpiredVipServiceSuppliers(req: any, res: any, next: any) {
  ServiceSupplierRepository.getAllNonExpiredVipServiceSuppliers()
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function getServiceSupplierById(req: any, res: any, next: any) {
  ServiceSupplierRepository.getServiceSupplierById(req.params.id)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function approveServiceSupplierById(req: any, res: any, next: any) {
  ServiceSupplierRepository.approveServiceSupplier(req.params.id)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function updateServiceSupplier(req: any, res: any, next: any) {
  ServiceSupplierRepository.updateServiceSupplier(req.params.id, req.body)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function deleteServiceSupplier(req: any, res: any, next: any) {
  ServiceSupplierRepository.deleteServiceSupplier(req.params.id)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

export default {
  createServiceSupplier,
  getAllServiceSuppliersForAdmin,
  getAllNonExpiredServiceSuppliersByServiceType,
  getAllNonExpiredServiceSuppliersByArea,
  getAllNonExpiredVipServiceSuppliers,
  getServiceSupplierById,
  approveServiceSupplierById,
  updateServiceSupplier,
  deleteServiceSupplier,
}

// TODO: read req.body, query param and pass them properly, pagination
