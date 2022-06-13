const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});




app.use (
    function (req, res, next) {
        console.log ("Globasl Middleware is Created succfully by sayan");
        next();
  }
  );
const mw= function(req,res,next) {
    var currentDate= new Date();
    var dateTime= currentDate.getDate() + " "
                  + (currentDate.getMonth()+1) + " "
                  + currentDate.getFullYear() + " "
                  + currentDate.getHours() + ":"
                  + currentDate.getMinutes() + ":"
                  + currentDate.getSeconds();
    let ip = req.ip
    let url= req.originalUrlg
    console.log(`${dateTime} ${ip} ${url}`)
    next()              
}
app.use( mw )