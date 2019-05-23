const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3005;
const DB_ADDRESS = process.env.DB_ADDRESS || 'localhost:27017';

const app = express();

/*
mongoose.connect(`${DB_ADDRESS}/Blogging`, { useNewUrlParser: true });
let db = mongoose.connection;

db.once('open', () => {
	console.log('Db heLLa coNNected');
});

db.on('error', (err) => {
	console.log(err);
});
*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => console.log(`Listening on ${port}`));