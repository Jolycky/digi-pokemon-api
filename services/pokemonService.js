const https = require('https');

let pokemonData = {};

exports.insertPokemon = (pokemon) => {
    pokemonData[pokemon.name.toLowerCase()] = pokemon;
    return pokemon;
};

exports.getPokemonData = (name) => {
    const localPokemon = pokemonData[name.toLowerCase()];
    if (localPokemon) {
        return Promise.resolve(localPokemon);
    } else {
        return new Promise((resolve, reject) => {
            https.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`, (resp) => {
                let data = '';
                resp.on('data', (chunk) => { data += chunk; });
                resp.on('end', () => {
                    if (resp.statusCode === 200) {
                        resolve(JSON.parse(data));
                    } else {
                        resolve(null);
                    }
                });
            }).on("error", (err) => {
                reject(err);
            });
        });
    }
};
