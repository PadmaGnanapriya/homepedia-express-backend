import { Router } from 'express';
import dashboardController from "../controllers/DashboardController";
import authorization, {PERMISSION_TYPES} from "../middleware/authorization";

const dashboardRoutes = Router();

dashboardRoutes.get('/card-data', authorization([PERMISSION_TYPES.ADMINISTRATOR]), dashboardController.getAllCardData);
dashboardRoutes.get('/table-data', authorization([PERMISSION_TYPES.ADMINISTRATOR]), dashboardController.getAllTableData);
dashboardRoutes.get('/chart-data', authorization([PERMISSION_TYPES.ADMINISTRATOR]), dashboardController.getAllChartData);
dashboardRoutes.get('/pie-data', authorization([PERMISSION_TYPES.ADMINISTRATOR]), dashboardController.getAllPieData);

export default dashboardRoutes;

//todo: add auth middleware
// dashboardRoutes.post('/', authorization([ADMINISTRATOR]),dashboardController.createdashboard);
