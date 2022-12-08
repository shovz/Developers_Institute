import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import router from './routes/JobTracker.js';
import path from 'path';
//


dotenv.config();
const app = express();
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);



app.listen(process.env.PORT||8080, ()=>{
  console.log(`run on port ${process.env.PORT||8080}`);
})


const __dirname = path.resolve();

app.use('/',express.static(path.join(__dirname,'client/build')));
app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'./client/build','index.html'))
})
