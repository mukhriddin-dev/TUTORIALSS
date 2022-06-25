
import axios from "axios";

const URL = "https://backendsss.herokuapp.com";

const Api = {
  getUser: () => {
    return axios.get(`${URL}/users`);
  },
  searchUser: (id) => {
    return axios.get(`${URL}/users/${id}`);
  },
  updateUser: (id, params) => {
     
    return axios.put(`${URL}/users/${id}`, params);
  },
};

export default Api;
