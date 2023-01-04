import axiosClient from "./axiosClient";
const userApi = {
  getAll(params) {
    const url = "/user?limit=50&page=1";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = "/user?limit=50&page=1";
    return axiosClient.get(url);
  },
  add(data) {
    const url = "";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "";
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = "";
    return axiosClient.delete(url);
  },
};
export default userApi;
