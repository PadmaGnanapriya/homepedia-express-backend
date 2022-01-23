import CityModel, {City} from "../models/City";

/**
 * create new City in mongo db
 * @param newCity
 */
const createCity = async (newCity: City) => {
  return await CityModel.create(
    {
      name: newCity.name,
      createdAt: new Date(),
      modifiedAt: new Date(),
    }
  );
};
/**
 * Sent all Citys
 */
const getAllCities = async () => {
  return CityModel.find({status: 1}, '_id name amount');
}

/**
 * Not permanently delete from db. Change status only 1 > 3
 * @param id
 * @param city
 */
const updateCity = async (id: number, city:any) => {
  return CityModel.findOneAndUpdate({_id: id}, {$set:city})
}

/**d
 * Not permanently delete from db. Change status only 1 > 3
 * @param id
 */
const deleteCity = async (id: number) => {
  return CityModel.findOneAndUpdate({_id: id}, {$set: {status: 3}})
}

export default {
  createCity,
  getAllCities,
  updateCity,
  deleteCity,
}
