const axios = require('axios');

const API_URL = 'https://jsonplaceholder.typicode.com/';

axios.get(`${API_URL}/users`)
  .then(response => {
    const data = response.data;
    const HTMLResponse = document.querySelector("#app");

    const template = data.map(user => `<li>${user.name} || el correo es: || ${user.email}</li>`);
    HTMLResponse.innerHTML = `<ul>${template}</ul>`;
  })
  .catch(error => {
    console.error('Error al hacer la solicitud:', error);
  });
