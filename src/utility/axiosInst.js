import axios from "axios";
import env from "../../env";

const axiosSpring = axios.create({
  baseURL: env.api.MAIN_API_URL,
  timeout: 2500
})

export default axiosSpring