import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com';
axios.defaults.headers.common['x-api-key'] =
  'live_m5aonVG1bch7JsCC7sG5xcciB31OWNXt0d7KMIUXlajXzNKDO8o8LfF4wORxmeqZ';

export function fetchBreeds() {
  return axios
    .get('/v1/breeds')
    .then(response => response.data)
    .catch(error => {
      console.error(error);
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data[0])
    .catch(error => {
      console.error(error);
    });
}