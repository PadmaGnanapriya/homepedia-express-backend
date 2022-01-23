import {Router} from 'express';
import CityController from "../controllers/CityController";
import authorization, {PERMISSION_TYPES} from "../middleware/authorization";

const CityRoutes = Router();

CityRoutes.post('/', CityController.createCity);
CityRoutes.get('/', CityController.getAllCities);
CityRoutes.patch('/:id', CityController.updateCity);
CityRoutes.delete('/:id', CityController.deleteCity);

export default CityRoutes;

