const { text } = require('body-parser');
const express = require('express');
const Router = express.Router();
var mammoth = require("mammoth");
const mysqlconnection = require('../connection');
const calender = require('../Interfaces/calender');


// idCalender int PK 
// date date 
// Title varchar(45) 
// Content varchar(45)

Router.get("/", (req, res) => {
    mysqlconnection.query("SELECT * FROM mydb.calender", (err, rows , fields) =>{
        if (!err)
        {
            // rows.forEach(fields => {
            //     calender.idCalender = fields[0];
            //     calender.date= fields[1];
            //     calender.title= fields[2];
            //     calender.content= fields[3];
            // });
            // console.log(rows);
            // console.log(calender);
            // res.send(calender);
            res.send(rows);
        }
        else{
            console.log("Failed query");
        }
    })
});




module.exports = Router;
