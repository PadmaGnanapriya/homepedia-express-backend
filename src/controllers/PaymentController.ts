import PaymentRepository from "../repositories/PaymentRepository"

async function createPayment(req: any, res: any, next: any) {
  console.log(req.body)
  PaymentRepository.createPayment(req.body)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function getAllPayments(req: any, res: any, next: any) {
  PaymentRepository.getAllPayments()
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function getPaymentById(req: any, res: any, next: any) {
  PaymentRepository.getPaymentById(req.params.id)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

export default {
  createPayment,
  getAllPayments,
  getPaymentById,
}

// TODO: read req.body, query param and pass them properly, pagination
