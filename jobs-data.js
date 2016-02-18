var mongoose = require('mongoose');
var Promise = require('bluebird');

var Job = mongoose.model('Job');


var findJobs = function(query){
    return Promise.cast(Job.find(query).exec());
}

var createJob = Promise.promisify(Job.create, {context: Job});

exports.findJobs = findJobs;

exports.connectDb = Promise.promisify(mongoose.connect, {context: mongoose});

exports.saveJob = createJob;

exports.seedJobs = function(){
        return findJobs({}).then(function(collection){
            if(collection.length === 0) {
               return Promise.map(seedJobs, function(job){
                   return createJob(job);
               });
            }
        });
};

var seedJobs = [
            {title:'Cook', description:'You will be making bagels'},
            {title:'Waiter', description:'You will be putting food on peoples tables'},
            {title:'Programmer', description:'You will be mindlessly typing for hours'},
            {title:'Axe Maker', description:'Many axes to make, so many...'}
        ];

