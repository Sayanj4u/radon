const midW= function(req,res,next){
    console.log(req.headers.isFreeAppUser)
    let data= req.headers.isFreeAppUser || req.headers.isfreeappuser
    console.log(data)
    if(data===undefined){
        res.send({error: "This field is required"})
    }else {
        next()
    }
    // if(!req.headers.isfreeappuser){
    //     next()
    // }else{
    //     res.send({error: "The request is missing a mandatory header"})
    // }
}
module.exports.midW= midW

const orderModel = require("../models/orderModel")
const userModel = require("../models/userModel")

const midX = async function (req, res, next) {
    await userModel.updateMany({}, { $set: { isFreeAppUser: false } },{upsert:true})
    await orderModel.updateMany({}, { $set: { isFreeAppUser: false } },{upsert:true})
    if (!req.headers["isfreeappuser"])
        res.send({ msg: "the request is missing a mandatory header" })
    else
        next()
}



module.exports.midX = midX

















































const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
