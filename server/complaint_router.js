var pg = require('pg');
var conString = "postgres://ianjohnson@localhost/311";
var client = new pg.Client(conString);
client.connect();

exports.get_complaints = function(req, res){

  var start = req.query.start + '';
  var end = req.query.end;

  startd = new Date(Date.parse(start)).getTime();
  endd = new Date(Date.parse(end)).getTime();


  console.log(start, end);
  var sql = "SELECT * FROM complaints WHERE created_date > '" + start + "' AND created_date < '" + end + "' LIMIT 100";

  console.log(sql);

  client.query(sql, function(err, probes) {

    //call `done()` to release the client back to the pool
    //done(); --not defined...
    if(err) {
      return console.error('error running query', err);
    }

    res.send(probes);
  })
};