import http from "../http-common";

const getAll = () => {
  return http.get("/trucker");
};

const get = (id) => {
  return http.get(`/trucker/${id}`);
};

const create = (data) => {
  return http.post("/trucker", data);
};

const update = (id, data) => {
  return http.put(`/trucker/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/trucker/${id}`);
};

const onSearchIconClick = (name) => {
  return http.get(`/trucker?name=${name}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  onSearchIconClick,
};
