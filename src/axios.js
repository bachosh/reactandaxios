import axios from 'axios';
///axiosis copiebs vaketebt. sxvadasxva default parametrebit
const instance = axios.create(
  {
      baseURL: 'https://jsonplaceholder.typicode.com'
  }  
);
instance.defaults.headers.common['Authorization'] = ['AUTH TOKEN FOR INSTANCE'];

export default instance;