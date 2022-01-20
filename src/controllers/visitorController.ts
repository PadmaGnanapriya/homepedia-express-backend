import VisitorRepository from "../repositories/VisitorRepository"

async function saveVisit(req: any, res: any, next: any) {
  VisitorRepository.saveVisit(req.body)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

export default {
    saveVisit
  }