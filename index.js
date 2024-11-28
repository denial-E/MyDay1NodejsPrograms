import express from 'express';

const app= express();
const PORT=4000;

app.get('/', (req,res)=>{
    res.status(200).json({messege:"Hai my Dear Team,we will become a fsd developer"})
})
app.get('/get-data', (req,res)=>{
    res.status(200).json({messege:"data",data:{name:"god"}})
})

app.listen(PORT, ()=>{
  console.log(`App is running in the port = ${PORT}`);
})//running