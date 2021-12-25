import ServiceCategoryRepository from "../repositories/ServiceCategoryRepository"

async function createServiceCategory(req: any, res: any, next: any) {
  ServiceCategoryRepository.createServiceCategory(req.body)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function getAllServiceCategories(req: any, res: any, next: any) {
  ServiceCategoryRepository.getAllServiceCategories()
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function updateServiceCategory(req: any, res: any, next: any) {
  ServiceCategoryRepository.updateServiceCategory(req.params.id, req.body)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}


async function deleteServiceCategory(req: any, res: any, next: any) {
  ServiceCategoryRepository.deleteServiceCategory(req.params.id)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

export default {
  createServiceCategory,
  getAllServiceCategories,
  updateServiceCategory,
  deleteServiceCategory
}

// TODO: read req.body, query param and pass them properly, pagination
