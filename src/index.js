// const http = require('http');
// const axios = require('axios');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hola Mundo');
// });

// server.listen(port, hostname, () => {
//   console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);

//   axios.get('https://api.coingecko.com/api/v3/ping')
//   .then((response) => {
//       console.log('----------------------------')
//       console.log(`terminado`)
//     console.log(response.data);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//     console.log(response.config);
//   });
// });



const express = require('express')
const router = require('./router')

const app = express()
const port = 3000

app.use('/', router) // enable http requests (REST API)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})