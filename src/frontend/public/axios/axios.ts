import axios from "axios";
import { router } from "../../router/router";

export const axPublic = axios.create({
  baseURL: "https://localhost:3002/api/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axPublic.interceptors.response.use(
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
