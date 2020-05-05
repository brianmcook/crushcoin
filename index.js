const express = require('express');
const app = express();
const port = 4201;
app.get('/', (req, res) => res.send('Crush Coin'));
app.listen(port, () => console.log(`Crush Coin listening on port ${port}!`))
