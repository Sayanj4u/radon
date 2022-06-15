const jwt = require("jsonwebtoken")
const userModel= require("../models/userModel")

const midY = function(req,res,next){
    let token = req.headers["x-Auth-token"]
    if(!token)
    token = req.headers["x-auth-token"]
    if(!token)
    return res.send({status: false, error: "token must be present"});
    // try {
        let verifyToken= jwt.verify(token, "functionup-radon")
        if(!verifyToken)
        return res.send({status: false, error: "token is invalid"})
        // req["verifyToken"]= verifyToken
    // }
    
    // catch(error) { 
    //     return res.send({status: false, error: "token is invalid"})}
    next();
}

module.exports.midY= midY