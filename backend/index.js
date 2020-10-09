const express = require('express');
let app = express(); // création de l'objet représentant notre application express
let port = 8080;
const bodyParser = require('body-parser');
var cors = require('cors');
const mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var productRouter = require('./routes/products');
var globalSearchRouter = require('./routes/globalSearch');
var authRouter = require('./routes/auth');
var categoryRouter = require('./routes/category');
var imageRouter = require('./routes/image');
const fileUpload = require('express-fileupload');

var mongoDB = 'mongodb://localhost:27017/spweb';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('Connection Successful!');
});

app.use(cors({ origin: true, credentials: true }));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/products', productRouter);
app.use('/globalSearch', globalSearchRouter);
app.use('/auth', authRouter);
app.use('/categories', categoryRouter);
app.use('/images', imageRouter);
app.listen(port, () => {
  // ecoute du serveur sur le port 8080
  console.log('le serveur fonctionne');
});
