import PaymentModel, {Payment} from "../models/Payment";

/**
 * create new Payment in mongo db
 * @param newPayment
 */
const createPayment = async (newPayment: Payment) => {
  return await PaymentModel.create(
    {
      serviceSupplierId: newPayment.serviceSupplierId,
      accountNumber: newPayment.accountNumber,
      amount: newPayment.amount,
      description: newPayment.description,
      paymentMethod: newPayment.paymentMethod,
      slipId: newPayment.slipId,
      image: newPayment.image,
      bank: newPayment.bank,
      status: newPayment.status || 1,
      createdAt: new Date()
    }
  );
};
/**
 * Sent all Payments
 */
const getAllPayments = async () => {
  return PaymentModel.find({status: 1}, '_id serviceSupplierId amount paymentMethod createdAt');
}

/**
 * the founded Payment will sent
 * @param id
 */
const getPaymentById = async (id: number) => {
  return PaymentModel.findOne({_id: id, status: 1});
}

export default {
  createPayment,
  getAllPayments,
  getPaymentById,
}
