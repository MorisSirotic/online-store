import axios from "axios";



export const axAdmin = axios.create({
    baseURL: "https://www.localhost:3002/api/admin"
});

