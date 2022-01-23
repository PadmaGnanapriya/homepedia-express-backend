import { Router } from 'express';
import dashboardController from "../controllers/DashboardController";

const dashboardRoutes = Router();

dashboardRoutes.get('/card-data', dashboardController.getAllCardData);
dashboardRoutes.get('/table-data', dashboardController.getAllTableData);
dashboardRoutes.get('/chart-data', dashboardController.getAllChartData);
dashboardRoutes.get('/pie-data', dashboardController.getAllPieData);

export default dashboardRoutes;

//todo: add auth middleware
// dashboardRoutes.post('/', authorization([ADMINISTRATOR]),dashboardController.createdashboard);
