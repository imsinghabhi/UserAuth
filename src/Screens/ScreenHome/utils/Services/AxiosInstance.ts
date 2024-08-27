import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '45184497-ebcc43428b5fcf50ae0b6a6d3';

const axiosInstance = axios.create({
  baseURL: API_URL,
  params: {
    key: API_KEY,
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response Received:', response.data);
    return response;
  },
  (error) => {
    console.error('Response Error:', error);
    return Promise.reject(error);
  }
);
export const makeGetRequest = async (url: string) => axiosInstance.get(url);
export default axiosInstance;
