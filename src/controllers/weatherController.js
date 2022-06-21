let axios = require("axios")

let getTemperature = async function (req, res) {
    try {
        let q= req.query.q
        let appid= req.query.appid
        console.log(`query params are: ${q} ${appid}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&&appid=${appid}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data.main.temp })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let sortedByTemp= async function (req, res) {
    try{
    let cities= ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray=[]
        for(i=0;i<cities.length;i++){
            let obj={city:cities[i]} //{city: "Bengaluru"}
            let resp= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=327d1182011b8b1b5e3b2ceca9c5d197`)
            console.log(resp.data.main.temp)
            obj.temp=resp.data.main.temp //{city:"Bengaluru", temp: 302.12}
            cityObjArray.push(obj) //[{city:"Bengaluru", temp: 302.12}....{}, {}...{}]
        }
        //res.send(cityObjArray)
        let sorted = cityObjArray.sort(function(a,b){return a.temp - b.temp})
        console.log(sorted)
        res.status(200).send({status:true,data:sorted})
    } catch(err){
        console.log(err)
        res.status(500).send({status:false, msg: "server error" })
    }

}

// let sortedByTemp= async function (req, res) {
//     try{

//       let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
//       let cityObjectArray = []
      
//       for (i=0; i<cities.length; i++ ) {

//         let obj= { city: cities[i]} //{city: Bengaluru}
//         let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&&appid=327d1182011b8b1b5e3b2ceca9c5d197`)
         
//         console.log(resp.data.main.temp)

//         obj.temp= resp.data.main.temp //{city:'Bengaluru', temp: 302.12}
//         cityObjectArray.push(obj)


//         let sorted = cityObjectArray.sort(function(a,b){return a.temp - b.temp})

//         console.log(sorted)
//         res.status(200).send({status:true, data: sorted}) // we can also write --- data:cityObjectArray



//       }
//     } catch(err){
//         console.log(err)
//         res.status(500).send({status:false, msg: "server error" })
//     }



// }
module.exports.getTemperature= getTemperature;
module.exports.sortedByTemp= sortedByTemp;