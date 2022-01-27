import axios from "axios";
import API from "./api";

const API_URL = API.API_URL_MICROSERVICE_AUTH;

const signup = (email, password) => {
  return axios
    .post(API_URL + "/signup", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        sessionStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const login = (email, senha) => {
  console.log(email, senha)
  return axios
    .post(API_URL + "/auth", {
      email,
      senha,
    })
    .then((response) => {
       if (response.data.token) {
        sessionStorage.setItem("user", JSON.stringify(response.data));
      } 
      return response.data;
    });
};

const logout = () => {
  sessionStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(sessionStorage.getItem("user"));
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;
