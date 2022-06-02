const x = function trim() {
let text1 = "     functionup    ";
let result1 = text1.trim()
console.log(result1)
}


const y = function changetoLowerCase(){
    let text2 = "functionup";
    let result2 = text2.toLocaleLowerCase();
    console.log(result2)
}


const z = function changeToUpperCase(){
    let text3 = "functionup";
    let result3 = text3.toLocaleUpperCase();
    console.log(result3)
}


module.exports.x=x
module.exports.y=y
module.exports.z=z