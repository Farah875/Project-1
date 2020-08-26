const express = require('express');
 const bodyParser = require ('body-parser');
 const cors = require('cors');
 var mammoth = require("mammoth");

//  var mysql = require("mysql");

//routes
var connection = require ('./connection');
const Documents = require ('./routes/document');
const Blog = require('./routes/blog');
const Blog1 = require('./routes/blog1');
const Calender = require('./routes/calender');
const Events = require('./routes/events');


var app = express();

app.use(cors());
app.use(bodyParser.json());


// const db = require('./models/model');
// db.sequelize.sync()

app.use("/Documents", Documents);
app.use("/Blog",Blog);
app.use("/OneBlog", Blog1);
app.use("/Calender", Calender);
app.use("/Events", Events);






//  var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: "mydb",
//     multipleStatements: true
//   });
  
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("connected");
//     con.query("SELECT * FROM mydb.documents", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });



//index page function collacting data 
// app.get('/', (req, res) => {

//     var mammoth = require("mammoth");
//     mammoth.extractRawText({path: "./cmd.docx"})
//     .then(function(result){
//         var text = result.value; // The raw text 

//         //this prints all the data of docx file
//         res.send("About:  "+text);
//         var messages = result.messages;
//     })
//     .done();
     
// });

//for about page
// app.get('/about', (req, res) => {

//     var mammoth = require("mammoth");
//     mammoth.extractRawText({path: "./cmd.docx"})
//     .then(function(result){
//         var text = result.value; // The raw text 

//         //this prints all the data of docx file
//         res.send("What we do:  "+text);
//         var messages = result.messages;
//     })
//     .done();
     
// });


// //for apply page
// app.get('/apply', (req, res) => {

//     var mammoth = require("mammoth");
//     mammoth.extractRawText({path: "./cmd.docx"})
//     .then(function(result){
//         var text = result.value; // The raw text 

//         //this prints all the data of docx file
//         res.send("How to apply:  "+text);
//         var messages = result.messages;
//     })
//     .done();
     
// });

 
const port = process.env.PORT || 3000;
 app.listen(port, () => {
     console.log(`listening on port ${port} ....`);
});