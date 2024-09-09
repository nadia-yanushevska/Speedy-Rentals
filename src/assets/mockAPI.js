import axios from 'axios';

const mockApiID = '66d8a06b37b1cadd805542d9'
axios.defaults.baseURL = `https://${mockApiID}.mockapi.io`;

export function get_cars(page = 1) {
    const data = axios.get(`/adverts/${page}`);
    return data;
}
