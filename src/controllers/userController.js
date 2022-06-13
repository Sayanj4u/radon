const UserModel= require("../models/userModel")




// const basicCode= async function(req, res) {
//     let tokenDataInHeaders= req.headers.token
//     console.log(tokenDataInHeaders)

//     console.log( "HEADER DATA ABOVE")
//     console.log( "hey man, congrats you have reached the Handler")
//     res.send({ msg: "This is coming from controller (handler)"})
//     }


// useless code
// const getCode= async function(req,res) {
//     const { networkInterfaces } = require('os');

//     const nets = networkInterfaces();
//     const results = Object.create(null); // Or just '{}', an empty object
    
//     for (const name of Object.keys(nets)) {
//         for (const net of nets[name]) {
//             // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
//             // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
//             const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
//             if (net.family === familyV4Value && !net.internal) {
//                 if (!results[name]) {
//                     results[name] = [];
//                 }
//                 results[name].push(net.address);
//             }
//         }
//     }


//     res.send({msg: "falna dikna"})
// }


















const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
// module.exports.basicCode= basicCode