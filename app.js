var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var PORT = 3000;

// REQUIRE MIDDLEWARE
// var instantMongoCrud = require('express-mongo-crud'); // require the module

var Document = require('./models/document.model');

mongoose.connect('mongodb://database:27017/mongocrud');

var options = { //specify options
    host: `localhost:${PORT}`
}

var router = express.Router();

router.get('/getDocuments', function (req, res, next) {

    Document.find({}, function (err, documents) {

        if(err) res.send(err);

        res.json({documents: documents});
    })
})

router.post('/saveDocument', function (req, res) {

    var doc = new Document();

    doc.documentId = req.body.documentId;
    doc.title = req.body.title;
    doc.author = req.body.author;

    doc.save(function (err) {
        if(err) res.send(err);

        res.json({message: 'Document saved'});
    })
});

app.use(cors());
//USE AS MIDDLEWARE
app.use(bodyParser.json()); // add body parser
// app.use(instantMongoCrud(options))
app.use('/api', router);


app.listen(PORT, ()=>{
    console.log('started');
});

