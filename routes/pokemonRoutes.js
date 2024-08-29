const pokemonController = require('../controllers/pokemonController');

module.exports = (req, res) => {
    const urlParts = req.url.split('/');
    const pokemonName = urlParts[2];

    if (req.method === 'GET' && urlParts[1] === 'pokemon') {
        if (pokemonName) {
            pokemonController.getPokemon(req, res, pokemonName);
        } else {
            res.statusCode = 400;
            res.end('Please provide a Pokémon name.');
        }
    } else if (req.method === 'POST' && urlParts[1] === 'pokemon') {
        pokemonController.insertPokemon(req, res);
    } else if (req.method === 'PUT' && urlParts[1] === 'pokemon') {
        pokemonController.updatePokemon(req, res, pokemonName);
    } else if (req.method === 'PATCH' && urlParts[1] === 'pokemon') {
        pokemonController.partialUpdatePokemon(req, res, pokemonName);
    } else if (req.method === 'DELETE' && urlParts[1] === 'pokemon') {
        pokemonController.deletePokemon(req, res, pokemonName);
    } else if (req.method === 'HEAD' && urlParts[1] === 'pokemon') {
        pokemonController.headPokemon(req, res);
    } else if (req.method === 'OPTIONS' && urlParts[1] === 'pokemon') {
        pokemonController.optionsPokemon(req, res);
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
};
