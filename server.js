const http = require('http');
const pokemonRoutes = require('./routes/pokemonRoutes');

const server = http.createServer((req, res) => {
    pokemonRoutes(req, res);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
