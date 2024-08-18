import axios from 'axios';

const API_URL = 'http://localhost:3000/api/torneos';

export const getTorneos = async () => {
  return await axios.get(API_URL);
};

export const createTorneo = async (torneo) => {
  return await axios.post(API_URL, torneo);
};

export const deleteTorneo = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
