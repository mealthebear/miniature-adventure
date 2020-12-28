const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const router = require('./router.js');

const app = express();
const port = 3000;

app.use(json.bodyParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/client/dist')));

app.use('/users', router);

app.listen(port, console.log(`Listening on port ${port}!`));
