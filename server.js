var express = require('express');
var path = require('path');

var port = process.env.PORT || 3000;
var app = express();
var tableWait = []
var table = []

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res) => {
  res.sendFile(path.join(__dirname,"index.html"))  
})

app.get("/tables",(req,res)=> {
    res.sendFile(path.join(__dirname,'tables.html'))
})

app.get("/api/tables", (req,res) => {
    res.json(table);
})

app.post("/api/tables", (req, res) => {
    var newTable = req.body
    console.log(newTable);
    if(table.length <5){
        table.push(newTable);
    } else {
        tableWait.push(newTable)
    }
    res.json(newTable)
})

app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname,'reserve.html'))
})

app.get("/api/reserve", (req,res) => {
    res.json(tableWait)
})


app.listen(port, ()=> {
    console.log(`server is listen to ${port}`)
})