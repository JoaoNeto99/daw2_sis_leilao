import axios from "axios";
import API from "./api";
import authHeader from "./auth-header";
const API_URL = API.API_URL_MICROSERVICE_LANCE;


function getLeilaoById(id) {
  return axios
  .get(API_URL + `/${id}`,  { headers: authHeader() })
  .then((response) => {
    return response.data
  })
}

function getAllLances(id) {
  return axios
    .get(API_URL + `/${id}`,  { headers: authHeader() })
    .then((response) => {
      return response.data
    })
    
}

function fazLance(lance) {
  console.log(lance)
  return axios
    .post(API_URL, lance, { headers: authHeader() })
    .then((response) => {
      return response.data
    })
    
}

const lanceService = {
  getAllLances,
  getLeilaoById,
  fazLance
};

export default lanceService;