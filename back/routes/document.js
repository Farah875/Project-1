const express = require('express');
const Router = express.Router();
var mammoth = require("mammoth");
var document = require('../Interfaces/documents');
const mysqlconnection = require('../connection');

Router.get("/:id", (req, res) => {

    var id = req.params.id;

    console.log(id);

    //document : Documents;
    //SELECT * FROM mydb.documents where idDocuments = ${id}
    mysqlconnection.query(`SELECT data FROM mydb.documents where idDocuments = ${id}`, (err, rows , fields) =>{
        if (!err)
        {

            var path = rows[0].data;
            console.log(String(path));
            mammoth.extractRawText({path: String(path)})
            .then(function(result){
            var text = result.value; // The raw text 
                document.data = text;
            // res.send(`the id is: ${id} and the included text is :
            res.send(document);
            })
            .done();
            // console.log (rows);
            // res.send(rows);
         
        }
        else{
            console.log("Failed query");
        }
    })
});




module.exports = Router;