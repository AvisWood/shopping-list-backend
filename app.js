const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');


const app = express()
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

const groceriesRoutes = require('./routes/groceries.js');

const PORT = process.env.PORT||3000

app.use('/groceries', groceriesRoutes);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var db

app.get('/', (req, res) => {
    res.send({
        hello: "hello :)"
    })
  })

MongoClient.connect('mongodb://awooden:password1@ds157677.mlab.com:57677/grocery_list', (err, database) => {
    if (err) return console.log(err)
    db = database.db('')
    app.listen(PORT, function () {
        console.log('Listening on port 3000')
    })
})

module.exports = app