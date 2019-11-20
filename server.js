const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
app = express();
port = 3100;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());


const routes = require('./api/routes/memeRoutes'); //importing route
  routes(app); //register the route


app.use(function(req, res) {
res.status(404).send({url: req.originalUrl + ' not found'})
});


app.listen(port);

console.log('meme RESTful API server started on: ' + port);