// Exercise 1 : HTTP
// let http = require("http");

// const server = http.createServer( (req,res) => {
//   res.setHeader('Content-Type', 'text/html');
//   res.end(`<p>First Response</p>
//            <h1>Second Response</h1>
//           <h1>third Response</h1>`)
// });


// server.listen(3000);


// Exercise 2 : HTTP & JSON

// const user = {
//     firstname: 'John',
//     lastname: 'Doe'
// }

// let http = require("http");

// const server = http.createServer( (req,res) => {
//   res.setHeader('Content-Type', 'text/html');
//   res.end(JSON.stringify(user))
// });


// server.listen(3000);

// Exercise 3 : Express

let express  = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send ('<h1>this is h1 tag</h1>')
})

app.listen(3000);