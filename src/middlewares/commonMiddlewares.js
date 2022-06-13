// useless code
// const { nextTick } = require('process');

// const midWare= function (req,res) {
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
//     next() 
// } 
// module.exports.midWare= midWare
// const mid1= function ( req, res, next) {
//     req.falana= "hi there. i am adding something new to the req object"
//     console.log("Hi I am a middleware named Mid1")
//     next()
// }

// const mid2= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid2")
//     next()
// }

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }

// module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
