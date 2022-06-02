const express = require('express');
const lodash = require('lodash')
const externalModule = require('../logger/logger')
const externalModule1 = require('../util/helper')
const externalModule2 = require('../validator/formatter')
// const extMod1 = require('../util/helper')
const extMod2 = require('../util/helper')
const extMod3 = require('../util/helper');
const { route } = require('express/lib/application');

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.log()
    externalModule.a()
    
    externalModule1.printDate()
    externalModule1.mont()
    externalModule1.ba()
    externalModule2.x()
    externalModule2.y()
    externalModule2.z()


    // console.log(externalModule.welcome())
    console.log(externalModule1.ba())
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    let months = ['january', 'February', 'March', 'April', 'May','June','July','August','September','October','November','December']
    console.log(lodash.chunk(months,3))


    let x = [1,3,5,7,9,11,13,15,17,19]
   let newArray = lodash.tail(x);
       console.log(newArray);


       let a = [34, 35, 45, 48, 49];
       let b = [48, 55, 49,70, 45];
       let c = [70,71,45,49]
       let d = [34,70,78,32,45]
       let e = [38,36,37,38,48,34]
       let union = [...new Set([...a, ...b,...c,...d,...e])];
console.log(union);


let pairs = [['Marvel', 'Avengers'], ['DCEU', 'JusticeLeague'], ['Drama', 'Bahubali'], ['Action', 'MissionImpossible7']]
  
let obj = lodash.fromPairs(pairs);
  
console.log(obj)


    res.send('My second ever api!')
});


router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
    count = 7;
    let missingNumber = new Array();

    for (var i = 1; i <= count; i++) {
      if (arr.indexOf(i) == -1) {
        missingNumber.push(i);
      }
    }
    console.log(missingNumber)

    ///LOGIC WILL GO HERE 
    res.send(  { data: missingNumber  }  );
});
















// router.get('/test-me3', function (req, res) {
//     res.send('My 4th api!')
// });

// router.get('/test-me4', function (req, res) {
//     res.send('My last api!')
// });

module.exports = router;
// adding this comment for no reason