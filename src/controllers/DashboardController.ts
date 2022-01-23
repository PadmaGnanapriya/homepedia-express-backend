import DashboardRepository from "../repositories/DashboardRepository";

async function getAllCardData(req: any, res: any, next: any) {
  DashboardRepository.getAllCardData()
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function getAllTableData(req: any, res: any, next: any) {
  DashboardRepository.getAllTableData()
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function getAllChartData(req: any, res: any, next: any) {
  DashboardRepository.getAllChartData()
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function getAllPieData(req: any, res: any, next: any) {
  DashboardRepository.getAllPieData()
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

export default {
  getAllCardData,
  getAllTableData,
  getAllChartData,
  getAllPieData
}