const express = require('express');
const app = express();
const port = 4201;
app.get('/home', (req, res) => res.send('crushcoin-app'));
app.listen(port, () => console.log(`crushcoin-app listening on port ${port}!`))
