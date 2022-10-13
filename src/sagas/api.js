import axios from 'axios';
const API_URL = "https://front-test-api.herokuapp.com/api" 

export default axios.create({
  baseURL: API_URL
});