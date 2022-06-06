const express = require('express');
const router = express.Router();
const lodash = require("lodash")
router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

// router.get("/sol1", function (req, res) {let arr= [1,2,3,5,6,7]
 
//   let total = 0;
//   for (var i in arr) {
//       total += arr[i];
//   }

//   let lastDigit= arr.pop()
//   let consecutiveSum= lastDigit * (lastDigit+1) / 2
//   let missingNumber= consecutiveSum - total

//   res.send(  { data: missingNumber  }  );
// });

router.get("/sol2", function (req, res) {let arr= [33,34,35,37,38]
  let len= arr.length

  let total = 0;
  for (var i in arr) {
      total += arr[i];
  }
let firstDigit= arr[0]
  let lastDigit= arr.pop()
  let consecutiveSum= (len + 1) * (firstDigit + lastDigit) / 2
  let missingNumber= consecutiveSum - total

  res.send(  { data: missingNumber  }  );
});

let players = [
{ "name": "ishita",
"dob": "1/1/1997",
"gender": "female",
"city": "dumdum",
"sports": [
"swimming"
]},
{ "name": "ishita",
"dob": "1/1/1997",
"gender": "female",
"city": "dumdum",
"sports": [
"swimming"
]
},

{ "name": "ishita",
"dob": "1/1/1997",
"gender": "female",
"city": "dumdum",
"sports": [
"swimming"
]}
]
                  
router.post("/players", function(req, res) {
  res.send(  { data: "players" , status: true }  )
  let input = req.body.element
})
//1. Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.

router.get("/movies" , function(req, res) {
 let movie = ["batman", "ironman", "spiderman", "superman", "ManMan"]

console.log(movie)

    res.send("movie")
})
//2. Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1). You can define an array of movies again in your api

router.get("/movies/:index", function(req,res){
    const value = req.params.index
    const movies = ["batman", "ironman", "spiderman", "superman", "ManMan"]
    res.send(movies[value]);
})
//3. Handle a scenario in problem 2 where if the index is greater than the valid maximum value a message is returned that tells the user to use a valid index in an error message.

router.get("/movies2/:index", function(req,res){
    const value = req.params.index
    const movies = ["batman", "ironman", "spiderman", "superman", "ManMan"]
    if(value<movies.length){
        res.send(movies[value])
    }else {
        res.send("use a valid index number")
    }
})
//4. Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. Each movie object should have values - id, name.
router.get('/films', function(req,res){
const films = [
    {
        'id': 1,
        'name': "batman",
    },
    {
        'id': 2,
        'name': 'ironman'

    },
    {
        'id': 3,
        'name': 'spiderman',
    },
    {
        'id': 4,
        'name': 'superman',
    },
    {
        'id': 5,
        'name': 'ManMan'
    }
]
res.send(films)
})
//5. Write api GET /films/:filmId where filmId is the value received in request path params. Use this value to return a movie object with this id. In case there is no such movie present in the array, return a suitable message in the response body. 
router.get("/films/:filmId", function(req,res){
    let value = req.params.filmId;
    const films = [
        {
            'id': 1,
            'name': "batman",
        },
        {
            'id': 2,
            'name': 'ironman'
    
        },
        {
            'id': 3,
            'name': 'spiderman',
        },
        {
            'id': 4,
            'name': 'superman',
        },
        {
            'id': 5,
            'name': 'ManMan'
        }
    ]
    if(value<films.length){
        res.send(films[value])
    }else{
        res.send("index number is invalid")
    }
})


module.exports = lodash
module.exports = router;