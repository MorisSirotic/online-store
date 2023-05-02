import axios from "axios";
import { router } from "../../router/router";

export const axAdmin = axios.create({
  baseURL: "https://localhost:3002/api/admin/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axAdmin.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // Handle 401 error here
      console.log("Correctly intercepted");
      router.navigate("/admin/auth");
    }
    return Promise.reject(error);
  }
);
