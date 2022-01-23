import CityRepository from "../repositories/CityRepository"

async function createCity(req: any, res: any, next: any) {
  CityRepository.createCity(req.body)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function getAllCities(req: any, res: any, next: any) {
  CityRepository.getAllCities()
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function updateCity(req: any, res: any, next: any) {
  CityRepository.updateCity(req.params.id, req.body)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function deleteCity(req: any, res: any, next: any) {
  CityRepository.deleteCity(req.params.id)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

export default {
  createCity,
  getAllCities,
  updateCity,
  deleteCity
}

// TODO: read req.body, query param and pass them properly, pagination
