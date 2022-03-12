import { create } from 'apisauce';

// define the api
const baseUrl = 'https://my-json-server.typicode.com/emanu7478/whiteSpectreBanner/';
const apiClient = create({
  baseURL: baseUrl,
});

export { apiClient };
