import axios from "axios";
const api = axios.create({
    // baseURL: import.meta.env.VITE_BACKEND_URL,
    baseURL:'http://localhost:8000/api/v1/user',
    headers: {
        "Content-Type": "application/json",
    },
});

export default api