import FAQRepository from "../repositories/FaqRepository"

async function createFAQ(req: any, res: any, next: any) {
  FAQRepository.createFAQ(req.body)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function getAllFAQs(req: any, res: any, next: any) {
  FAQRepository.getAllFAQs()
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function updateFAQ(req: any, res: any, next: any) {
  FAQRepository.updateFAQ(req.params.id, req.body)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function deleteFAQ(req: any, res: any, next: any) {
  FAQRepository.deleteFAQ(req.params.id)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

export default {
  createFAQ,
  getAllFAQs,
  updateFAQ,
  deleteFAQ
}

// TODO: read req.body, query param and pass them properly, pagination
