import express from 'express';
import fs from 'fs';
import {format} from 'date-fns';

const app= express();
const PORT=4000;

app.get('/', (req,res)=>{
    res.status(200).json({messege:"Hai my Dear Team,we will become a fsd developer"})
})
app.get('/get-data', (req,res)=>{
    res.status(200).json({messege:"data",data:{name:"god"}})
})
app.get('/write-read', (req,res)=>{
    let today= format(new Date(), 'dd-mm-yyyy-hh-mm-ss')
    console.log(("today",today));
    const filePath= `TimeStamp/${today}.txt`
    fs.writeFileSync(filePath,`${today}`,'utf8')
    let data= fs.readFileSync(filePath,'utf8')
    res.status(200).send(data)
})
app.listen(PORT, ()=>{
  console.log(`App is running in the port = ${PORT}`);
})//running