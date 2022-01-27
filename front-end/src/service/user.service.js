import axios from "axios";
import API from "./api";
const API_URL = API.URL_MICROSERVICE_USER;


function save(user) {
  return axios
    .post(API_URL, user)
    .then(
      (response) => {
      return response.data
    },
    (error) => {
      console.log(error.message)
    })
    
}

const userService = {
  save
};

export default userService;