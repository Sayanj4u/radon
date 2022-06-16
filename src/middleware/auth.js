const jwt= require("jsonwebtoken")
const authenticate = function(req, res, next) {
       //check the token in equest header
       //validate this token
       let token = req.headers["x-auth-token"]
    if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-thorium')

    if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    

next()
   
}

const authorise = function (req,res, next) {
  
  let token = req.headers["x-auth-token"]
  let decodedToken = jwt.verify(token, 'functionup-thorium')
  let userToBeModified = req.params.userId
  //userId for the logged-in user
  let userLoggedIn = decodedToken.userId

  //
  if(userToBeModified != userLoggedIn)
  return res.send({status: true, msg: "user logged in is not allowed to modify the requested data"})
  next()
}


module.exports.authenticate= authenticate;
module.exports.authorise = authorise;