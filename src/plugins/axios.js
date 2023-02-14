import axios from "axios";

let process;
axios.defaults.baseURL = process.env.API_URL;
export default axios;