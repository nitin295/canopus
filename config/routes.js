var express = require("express");
var routes = express.Router();

routes.use("/",require("../controller/productpage"));
routes.use("/",require("../controller/addmore"));

routes.get("/logout",function(req,res){
    req.session.destroy();
    res.redirect("/productpage");
    return;
});

module.exports = routes;