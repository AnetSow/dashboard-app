import axios from 'axios';

const API = axios.create({
    baseURL: "https://dummyjson.com",
});

// akcje, które będą wykonywały dane requesty:
export const getAllProducts = () => API.get('/products')
