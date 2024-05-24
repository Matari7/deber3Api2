const http = require('https');
const axios = require('axios');

const API_URL = 'https://jsonplaceholder.typicode.com';

const server = http.createServer((req, res) => {
  if (req.url === '/users') {
    axios.get(`${API_URL}/users`)
      .then(response => {
        const data = response.data;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
      })
      .catch(error => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error al hacer la solicitud: ' + error.message);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Ruta no encontrada');
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
