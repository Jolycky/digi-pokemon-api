const pokemonService = require('../services/pokemonService');

exports.getPokemon = async (req, res, name) => {
    try {
        const pokemon = await pokemonService.getPokemonData(name);
        if (pokemon) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(pokemon));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: "Pokemon not found" }));
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: error.message }));
    }
};

exports.insertPokemon = (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const pokemon = JSON.parse(body);
        const savedPokemon = pokemonService.insertPokemon(pokemon);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: "Pokemon inserted", data: savedPokemon }));
    });
};

exports.updatePokemon = (req, res, name) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: "This is a PUT operation" }));
};

exports.partialUpdatePokemon = (req, res, name) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: "This is a PATCH operation" }));
};

exports.deletePokemon = (req, res, name) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: "This is a DELETE operation" }));
};

exports.headPokemon = (req, res) => {
    res.writeHead(200);
    res.end();
};

exports.optionsPokemon = (req, res) => {
    res.writeHead(200, {
        'Allow': 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS',
        'Content-Type': 'text/plain'
    });
    res.end("This is an OPTIONS operation");
};
