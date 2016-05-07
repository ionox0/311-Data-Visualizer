var pg = require('pg');
var conString = "postgres://ianjohnson@localhost/311";
var client = new pg.Client(conString);
client.connect();

exports.get_complaints = function(req, res){

  var start = req.query.start;
  var end = req.query.end;
  var complaint_type = req.query.complaint_type;

  var sql;
  if (complaint_type){
    sql = "SELECT * FROM complaints WHERE created_date > '" + start + "' AND created_date < '" + end + "' AND complaint_type = " + "'" + complaint_type + "'";
  } else {
    sql = "SELECT * FROM complaints WHERE created_date > '" + start + "' AND created_date < '" + end + "'";
  }
  sql += " LIMIT 500";

  console.log(sql);

  client.query(sql, function(err, rows) {

    //call `done()` to release the client back to the pool
    //done(); --not defined...
    if(err) {
      return console.error('error running query', err);
    }

    res.send(rows);
  })
};



exports.get_complaint_types = function(req, res){

  var sql = "SELECT DISTINCT complaint_type FROM complaints";

  console.log(sql);

  client.query(sql, function(err, rows) {

    //call `done()` to release the client back to the pool
    //done(); --not defined...
    if(err) {
      return console.error('error running query', err);
    }

    res.send(rows);
  })
};