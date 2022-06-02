

function printDate(){
    let d = new Date();
    let date = d.getDate();
    console.log("Today's date is ", date)
}

const mo = ["January", "february", "March", "April", "May", "June" , "July", "August", "September" , "October", "November", "December" ]
 const mont = function printMonth() {
     const dt = (new Date);
     console.log("and month is", mo[dt.getMonth()])
 }

const ba = function getBatchInfo(){
    console.log("Batch: radon,week:3, Day: 4, topic: node.js modules")
    console.log()
 }
 
 module.exports.ba = ba
 module.exports.printDate=printDate
 module.exports.mont = mont