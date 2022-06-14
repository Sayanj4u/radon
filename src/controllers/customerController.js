const customerModel = require("../models/customerModel");

const createUser= async function(req,res,next) {
    let data= req.body;
    // let isFreeAppUser= req.headers["isFreeAppUser"] = false
    // if(!isFreeAppUser){
    //     res.send({msg: "The request is missing this mandatory field"});
    // }
    // next()
    let saveData= await customerModel.create(data);
    res.send({userData: saveData})
}
module.exports.createUser= createUser