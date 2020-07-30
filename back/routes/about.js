const { text } = require('body-parser');
const express = require('express');
const Router = express.Router();
var mammoth = require("mammoth");
const mysqlconnection = require('../connection');

Router.get("/", (req, res) => {
    mysqlconnection.query("SELECT * FROM mydb.documents where idDocuments=1", (err, rows , fields) =>{
        if (!err)
        {
            var id = rows[0].Title;
            var path = rows[0].data;
            mammoth.extractRawText({path: path})
            .then(function(result){
            var text = result.value; // The raw text 

            res.send(`the id is: ${id} and the included text is :
            ${text}`);
            })
            .done();
        
        }
        else{
            console.log("Failed query");
        }
    })
});




module.exports = Router;
