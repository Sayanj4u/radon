// nums = [2,7,11,15];
// target = 9
// var twoSum = function(nums, target) {
//     for(let i = 0; i <= nums.length; i++){
//         for(let j = 0; j <= nums.length; j++){
//             if(nums[i] + nums[j] == target){
//                 return [i, j]
//             }
//         }
//     }
// };



// let func = function(){
//    console.log("this is an function")
// }

// let func2 = function(){
//     console.log("this is function 2")
//  }
//  let value = setTimeout(func, 2000)
// console.log(value)
//  func2()

// let array = [];

// function factorisation(arr) {
//     for (let j = arr; j > 0; j--) {
//         array.push(j);
//     }
//     return multiply();
// }

// function multiply() {
//     var sum = 1;
//     for (var i = 0; i < array.length; i++) {
//         sum = sum * array[i];
//     }
//     return sum;
// }

// console.log(factorisation(6));

function maxDifference(arr) {
    let maxDiff = -1;
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > min && maxDiff < arr[i] - min) {
        maxDiff = arr[i] - min;
      }
  
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return maxDiff;
  }
  console.log(maxDifference([3,6,7,10]))
