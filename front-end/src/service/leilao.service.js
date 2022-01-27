import axios from "axios";
import API from "./api";
 import authHeader from "./auth-header"; 
const API_URL = API.URL_MICROSERVICE_LEILAO;

function getAllLeiloes() {
  return axios
    .get(API_URL, { headers: authHeader() }).then(
      (response) => {
        return response.data
      },
      (error) => {
        console.log(error)
      }
    )
}

function getLeiloesAbertos() {
  return axios
    .get(`${API_URL}/open`, { headers: authHeader() }).then(
      (response) => {
        return response.data
      },
      (error) => {
        console.log(error)
      }
    )
}

function openLeilao(leilao) {
  return axios
    .put(`${API_URL}/open`, leilao, { headers: authHeader() }).then(
      (response) => {
        return response
      },
      (error) => {
        console.log(error.message)
      }
    );
}

function closeLeilao(leilao) {
  return axios
    .put(`${API_URL}/close`, leilao, { headers: authHeader() }).then(
      (response) => {
        return response
      },
      (error) => {
        console.log(error.message)
      }
    );
}

function deleteLeilao(id) {
  return axios
    .delete(API_URL+"/"+id, { headers: authHeader() }).then(
      (response) => {
        return response
      },
      (error) => {
        console.log(error.message)
      }
    );
}

function updateLeilao(leilao) {
  return axios
    .put(API_URL, leilao, { headers: authHeader() }).then(
      (response) => {
        return response
      },
      (error) => {
        console.log(error.message)
      }
    );
}

function saveLeilao(leilao) {
  return axios
    .post(API_URL, leilao, { headers: authHeader() }).then(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error.message)
      }
    );
}

function getLeilaoById(id) {
  return axios
    .get(API_URL + "/" + id, { headers: authHeader() }).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error.message)
      }
    );
}

const leilaoService = {
  getAllLeiloes,
  getLeiloesAbertos,
  getLeilaoById,
  openLeilao,
  closeLeilao,
  deleteLeilao,
  updateLeilao,
  saveLeilao
};

export default leilaoService;