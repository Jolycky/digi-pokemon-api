const express = require('express');
const app = express();
const pokemonRoutes = require('./routes/pokemonRoutes');

app.use(express.json());
app.use('/', pokemonRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});