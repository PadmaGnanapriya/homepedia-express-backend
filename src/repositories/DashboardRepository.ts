import ServiceSupplierModel, {ServiceSupplier} from "../models/ServiceSupplier";
import MessageModel, {Message} from "../models/Message";
import PaymentModel, {Payment} from "../models/Payment";
import VisitorModel, {Visitor} from "../models/visitor";

const groupByAll = (array: any, key: string) => {
  return array.reduce((result: any, currentValue: any) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {});
};

const groupBy = (array: any, key: string) => {
  return Object.entries(array.reduce((result: any, currentValue: any) =>
    ({...result, [currentValue[key]]: [...(result[currentValue[key]] || []), currentValue]}), {}))
    // @ts-ignore
    .map(ob => ({"name": ob[0], "count": ob[1].length}));
};


//-----------------------------------------------


const getAllCardData = async () => {
  const unReadCount = await MessageModel.count({status: 1});
  const readCount = await MessageModel.count({status: 4});
  const pendingServiceSupplierCount = await ServiceSupplierModel.count({status: 1});
  const rejectServiceSupplierCount = await ServiceSupplierModel.count({status: 3});
  const payments = await PaymentModel.find({}, 'amount createdAt')
  const registrations = await ServiceSupplierModel.find({}, 'createdAt')
  const d = new Date();
  d.setFullYear(d.getFullYear() - 1);
  return {
    totalIncome: {
      current: payments.reduce((a, b) => b.createdAt >= new Date((d.getFullYear()) + '-01-01') ? a + b.amount : 0, 0),
      last: payments.reduce((a, b) => b.createdAt < new Date((d.getFullYear()) + '-01-01') && b.createdAt > new Date((d.getFullYear() - 1) + '-01-01') ? a + b.amount : 0, 0),
    },
    newServiceSupplierRegistration: {
      current: registrations.filter((recode) => (new Date(recode.createdAt)) >= new Date((d.getFullYear()) + '-01-01')).length,
      last: registrations.filter((recode) => (new Date(recode.createdAt)) < new Date((d.getFullYear()) + '-01-01') && recode.createdAt > (new Date((d.getFullYear() - 1) + '-01-01'))).length,
    },
    totalServiceSuppliersRequest: {
      pending: pendingServiceSupplierCount,
      rejected: rejectServiceSupplierCount
    },
    totalMessages: {
      unread: unReadCount,
      read: readCount
    }
  }
}


const getAllTableData = async () => {
  let serviceSuppliers = await ServiceSupplierModel.find();

  return {
    serviceSupplierDistributionByCategory: groupBy(serviceSuppliers, 'serviceTypes'),
    serviceSupplierDistributionByCities: groupBy(serviceSuppliers, 'workingArea'),
  }
}


const getAllChartData = async () => {
  return {
    monthlyIncomeForYear: {
      current: [1200, 21000, 24000, 12000, 40000, 1200, 21000, 24000, 12000, 40000, 1200, 21000, 24000, 12000], //jan-dec
      last: [1200, 21000, 24000, 12000, 40000, 1200, 21000, 24000, 12000, 40000, 1200, 21000, 24000, 12000],
    },
    totalVisitorCountForMonth: {
      current: [120, 210, 200, 100, 400, 100, 20, 242, 120, 40, 110, 210, 40, 120], //jan-dec
      last: [200, 220, 240, 120, 40, 122, 200, 240, 120, 400, 10, 240, 240, 180],
    },
    totalVisitorCountForWeek: {
      current: [12, 33, 23, 34, 22, 11, 33, 42],  // mon-sun
      last: [12, 23, 34, 22, 11, 33, 42, 10],
    },
    totalNewVisitorCountForWeek: {  // not used
      current: [2, 3, 2, 3, 2, 1, 3, 2],  // mon-sun
      last: [1, 3, 34, 2, 1, 3, 4, 0],
    },
  }
}

const getAllPieData = async () => {
  let visitors = await VisitorModel.find();
  return {
    visitorDistribution: groupBy(visitors, 'platform')
  }
}

export default {
  getAllCardData,
  getAllTableData,
  getAllChartData,
  getAllPieData
}