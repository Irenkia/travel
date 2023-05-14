import http from "../http-common";

const getAll = () => {
  return http.get("/dashboard/countries");
};

const getById = (id) => {
  return http.get(`/dashboard/countries/${id}`);
};

const create = (data) => {
  return http.post("/dashboard/countries", data);
};

const update = (id, data) => {
  return http.put(`/dashboard/countries/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/dashboard/countries/${id}`);
};

const removeAll = () => {
  return http.delete(`/dashboard/countries`);
};

const findByName = (name) => {
  return http.get(`/dashboard/countries?title=${name}`);
};

const CountriesService = {
  getAll,
  getById,
  create,
  update,
  remove,
  removeAll,
  findByName,
};

export default CountriesService;
