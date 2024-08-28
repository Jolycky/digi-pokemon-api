const pokemonService = require('../services/pokemonService');

exports.getPokemon = async (req, res) => {
    try {
        const pokemon = await pokemonService.getPokemonData(req.params.name);
        res.json(pokemon);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.insertPokemon = (req, res) => {
    const pokemon = req.body;
    res.json({ message: "Pokemon inserted", data: pokemon });
};

exports.updatePokemon = (req, res) => {
    res.json({ message: "This is a PUT operation" });
};

exports.partialUpdatePokemon = (req, res) => {
    res.json({ message: "This is a PATCH operation" });
};

exports.deletePokemon = (req, res) => {
    res.json({ message: "This is a DELETE operation" });
};

exports.headPokemon = (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.sendStatus(200);
};

exports.optionsPokemon = (req, res) => {
    res.set('Allow', 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS');
    res.send("This is a OPTION operation");
};