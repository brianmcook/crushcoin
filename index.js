const express = require('express');
const app = express();
const port = 4201;
/* app.get('/', (req, res) => res.send('crushcoin-app')); */
app.all('*', function (req, res) {res.status(200).sendFile (`/`, {root: ./app});});
app.listen(port, () => console.log(`crushcoin-app listening on port ${port}!`))
