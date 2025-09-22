const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json())

app.get((req, res) => {
    if (err){
        res.status(404).send("<h1> 404 Not Found </h1>")
    } else {
        res.status(200)
    }
    
})

const port = 3333;
app.listen(port, err => {
    console.log("Node Express backend server starts; port, err:", port, err);
})