const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/pokemon/:name', pokemonController.getPokemon);
router.post('/pokemon', pokemonController.insertPokemon);
router.put('/pokemon/:name', pokemonController.updatePokemon);
router.patch('/pokemon/:name', pokemonController.partialUpdatePokemon);
router.delete('/pokemon/:name', pokemonController.deletePokemon);
router.head('/pokemon', pokemonController.headPokemon);
router.options('/pokemon', pokemonController.optionsPokemon);

module.exports = router;