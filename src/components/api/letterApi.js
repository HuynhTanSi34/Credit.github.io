import axiosClient from "./axiosClient";
const letterApi = {
  getAll(params) {
    const url = "/advice-letter/?limit=50&page=1";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = "/advice-letter/?limit=50&page=1";
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/advice-letter/?limit=50&page=1";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "/advice-letter/?limit=50&page=1";
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = "";
    return axiosClient.delete(url);
  },
};
export default letterApi;
