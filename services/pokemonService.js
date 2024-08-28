const https = require('https');

exports.getPokemonData = (name) => {
    return new Promise((resolve, reject) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        
        https.get(url, (resp) => {
            let data = '';

            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                resolve(JSON.parse(data));
            });

        }).on("error", (err) => {
            reject(err);
        });
    });
};
