var express = require('express');
var jobModel = require('./models/Job');
var jobsData = require("./jobs-data.js");

var app = express();

require("./jobs-service.js")(jobsData, app)

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
    res.render('index');
});

//mongoose.connect('mongodb://localhost/jobfinder');
jobsData.connectDb('mongodb://jfuser:jfuser@ds011268.mongolab.com:11268/ofcjobfinder')
.then(function(){
    console.log('Connected to MongoDb');
    jobsData.seedJobs();
});

app.listen(process.env.PORT, process.env.IP);