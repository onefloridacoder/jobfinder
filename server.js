var express = require('express');
var mongoose = require('mongoose');
var jobModel = require('./models/Job')

var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/api/jobs', function(req,res){
    mongoose.model('Job').find({}).exec(function(error, collection) {
        res.send(collection);
    });
});



app.get('*', function(req, res) {
    res.render('index');
});

//mongoose.connect('mongodb://localhost/jobfinder');
mongoose.connect('mongodb://jfuser:jfuser@ds011268.mongolab.com:11268/ofcjobfinder');

var con = mongoose.connection;
con.once('open', function() {
    console.log('Connected to MongoDb');
});

jobModel.seedJobs();

app.listen(process.env.PORT, process.env.IP);