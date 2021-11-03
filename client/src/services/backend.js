import axios from "axios";


const Backend = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers: {'Content-Type': 'application/json', "Accept": "application/json"}
});

export default Backend