import {Router} from 'express';
import CityController from "../controllers/CityController";
import authorization, {PERMISSION_TYPES} from "../middleware/authorization";

const CityRoutes = Router();

CityRoutes.post('/', authorization([PERMISSION_TYPES.ADMINISTRATOR]), CityController.createCity);
CityRoutes.get('/',authorization([PERMISSION_TYPES.ANY]), CityController.getAllCities);
CityRoutes.patch('/:id',authorization([PERMISSION_TYPES.ADMINISTRATOR]), CityController.updateCity);
CityRoutes.delete('/:id', authorization([PERMISSION_TYPES.ADMINISTRATOR]), CityController.deleteCity);

export default CityRoutes;

