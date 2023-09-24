import axios from 'axios';

const userRequest = axios.create({
  baseURL: 'https://localhost:5050/api', 
});

export default userRequest;