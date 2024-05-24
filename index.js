const axios = require('axios');

const API_URL = 'https://jsonplaceholder.typicode.com/';

axios.get(`${API_URL}/users`)
  .then(response => {
    const data = response.data;
    console.log(data);
  })
  .catch(error => {
    console.error('Error al hacer la solicitud:', error);
  });
