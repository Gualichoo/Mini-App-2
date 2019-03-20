const http = require('http');
var express = require('express');
var path = require('path');
const fs = require('fs');


const router = express.Router();


//console.log(process.env)
var app = express();

app.use(express.static('/client'));

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});





app.get('/', function (req, res) {
  res.sendStatus(200)
});


app.post('/upload_json', (req, res) => {
  fs.readFile('./samples/csv_report.csv', function (err,data) {
    if (err) throw err;
        console.log(data.toString())
});
console.log(this)
  var body = req.body;
  console.log(req.body)
 // console.log(req.params)
  //console.log(JSON.parse(body));
  res.send('POST request to the homepage')
 });



 server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


