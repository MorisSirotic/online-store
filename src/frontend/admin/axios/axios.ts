import axios from "axios";


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
      console.log("Correctly intercepted")
    }
    return Promise.reject(error);
  }
);
