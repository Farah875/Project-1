const { text } = require('body-parser');
const express = require('express');
const Router = express.Router();
var mammoth = require("mammoth");
const mysqlconnection = require('../connection');

Router.get("/:id", (req, res) => {
    var id = req.params.id;
    // res.send(`${id}`);
    mysqlconnection.query(`SELECT * FROM mydb.blog WHERE idBlog = ${id}`, (err, rows, fields) =>{
        if(!err)
        {
            // var id = rows[0].Name;
            // var path = rows[0].Content;
            // var image = rows[0].Image;
            // mammoth.extractRawText({path: path})
            // .then(function(result){
            // var text = result.value; // The raw text 
            // res.send(`the student is: ${id} and the included text is :
            // ${text} with the image ${image} `);
            // })
            // .done();


            // res.send(rows);

            
            var path = rows[0].Content;
            console.log(String(path));
            mammoth.extractRawText({path: String(path)})
            .then(function(result){
            var text = result.value; // The raw text 
                rows[0].Content = text;
                res.send(rows);
                // res.send(text);
            })
            
            .done();
            

        }
        else{
            console.log("Failed Query");
        }
    })
});

module.exports = Router;