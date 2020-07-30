const { text } = require('body-parser');
const express = require('express');
const Router = express.Router();
var mammoth = require("mammoth");
const mysqlconnection = require('../connection');


// idCalender int PK 
// date date 
// Title varchar(45) 
// Content varchar(45)

Router.get("/", (req, res) => {
    mysqlconnection.query("SELECT * FROM mydb.calender", (err, rows , fields) =>{
        if (!err)
        {
            res.send(rows);
        }
        else{
            console.log("Failed query");
        }
    })
});




module.exports = Router;
