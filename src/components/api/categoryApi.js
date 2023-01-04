import axiosClient from "./axiosClient";
const categoryApi = {
  getAll(params) {
    const url = "";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = "";
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
export default categoryApi;
