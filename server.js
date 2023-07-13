const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use((req,res,next)=>{
    res.send('<h1>Hello WORLD</h1>')
})

app.listen(8080,()=>{
    console.log('server running');
})