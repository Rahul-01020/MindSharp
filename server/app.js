const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql2');
const cors = require('cors'); 

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Ak@165667t",
    database: "myapp"
});

app.get('/',(req,res)=>{
    res.send("HII WElcome")
 })
 

app.listen(4000,()=>{
    console.log("running on 4000");
});