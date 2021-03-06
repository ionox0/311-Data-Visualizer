var express = require('express');
var port = process.env.PORT || 3011;
var complaintRouter = require('./server/complaint_router');

var app = express();
console.log(__dirname);

app.use(express.static(__dirname + '/build'));

app.get('/complaints', complaintRouter.get_complaints);
app.get('/complaint_types', complaintRouter.get_complaint_types);

app.listen(port, function() {
  console.log('Listening on:', port, '\n');
});

process.on('uncaughtException', function (err) {
  console.log(err);
});



