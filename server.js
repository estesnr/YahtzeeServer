const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/style.css'){
    fs.readFile('style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/script.js'){
    fs.readFile('script.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  else if(page == '/api') {
    if('roller' in params) {
      if(params['roller']=='unknown') {
        res.writeHead(200, {'Content-Type' : 'application/json'});
        let rollRes = []
        for(let i = 0; i < 5; i++) {
          rollRes.push(Math.ceil(Math.random() * 6))
        }
        const objToJson = {
          roll : rollRes
        }
        res.end(JSON.stringify(objToJson));
        console.log(rollRes)
      }
    }
  }
  else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
