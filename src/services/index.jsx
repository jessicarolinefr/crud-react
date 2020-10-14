import http from "../http-common";

const getAll = () => {
  return http.get("/schedules");
};

const get = (id) => {
  return http.get(`/schedules/${id}`);
};

const create = (data) => {
  return http.post("/schedules", data);
};

const update = (id, data) => {
  return http.put(`/schedules/${id}`, data);
};

export default {
  getAll,
  get,
  create,
  update,
};
