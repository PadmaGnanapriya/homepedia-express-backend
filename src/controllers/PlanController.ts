import PlanRepository from "../repositories/PlanRepository"

async function createPlan(req: any, res: any, next: any) {
  PlanRepository.createPlan(req.body)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function getAllPlans(req: any, res: any, next: any) {
  PlanRepository.getAllPlans()
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function updatePlan(req: any, res: any, next: any) {
  PlanRepository.updatePlan(req.params.id, req.body)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function deletePlan(req: any, res: any, next: any) {
  PlanRepository.deletePlan(req.params.id)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

export default {
  createPlan,
  getAllPlans,
  updatePlan,
  deletePlan
}

// TODO: read req.body, query param and pass them properly, pagination
