const { text } = require('body-parser');
const express = require('express');
const Router = express.Router();
var mammoth = require("mammoth");
const mysqlconnection = require('../connection');

Router.get("/", (req, res) => {
    mysqlconnection.query(`SELECT * FROM mydb.blog `, (err, rows, fields) =>{
        if(!err)
        {

            res.send(rows);

        }
        else{
            console.log("Failed Query");
        }
    })
});

module.exports = Router;