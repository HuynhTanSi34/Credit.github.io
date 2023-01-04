import axiosClient from "./axiosClient";
const recrumentApi = {
  getAll(params) {
    const url = "/recruitment?limit=50&page=1";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = "/recruitment?limit=50&page=1";
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/recruitment";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "/recruitment";
    console.log(data);
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = "/recruitment";
    return axiosClient.delete(url);
  },
};
export default recrumentApi;
