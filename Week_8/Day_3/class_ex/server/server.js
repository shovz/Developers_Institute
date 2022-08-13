const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const {getAllProducts} = require('./modules/products.js');

const products_router = require('./routes/products.js');

dotenv.config();

const app = express();

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(process.env.PORT,()=>{
  console.log(`run on port ${process.env.PORT}`);
});

app.use('/tasks' ,products_router);
