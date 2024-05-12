import axios from 'axios';

axios.defaults.baseURL = 'https://6640a104a7500fcf1a9e45c6.mockapi.io';

export function get_cars(page = 1) {
    const data = axios.get(`/adverts/${page}`);
    return data;
}

// Filter out instead
// export function get_car_make(make = 'Buick') {
//     const data = axios.get(`/adverts/`, {
//         params: {
//             make,
//         },
//     });
//     return data;
// }
