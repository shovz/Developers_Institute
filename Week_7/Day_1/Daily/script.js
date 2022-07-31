let main = require('./main.js');

let http = require("http");


const server = http.createServer( (req,res) => {
  console.log('I am listening....');
  res.setHeader('Content-Type', 'text/html');
  res.end(`<p>My Module is ${main.largeNumber}</p>
           <h1>Hi there at the frontend</h1>
          <h1>${main.date_time()}</h1>`)
});

server.listen(3000);

console.log(main.largeNumber);