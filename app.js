var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var fileupload = require("express-fileupload");
var cookieparser = require("cookie-parser");

app.set("view engine","ejs");
app.use(bodyparser.json());
app.use(cookieparser());
app.use(fileupload());
app.use(function(req,res,next){
    res.locals.cart = "";
    if(req.cookies.cart)
    {
        res.local.cart = req.cookies.cart;
    }

    next();
});

app.use(require("./config/routes"));



app.listen(3000,()=>{
    console.log("server is running")
});