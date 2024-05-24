const http = require('http');
const axios = require('axios');
const PORT = process.env.PORT || 5000

const API_URL = 'https://jsonplaceholder.typicode.com/';

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

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
server.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
