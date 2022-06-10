const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    if(!book.author_id){
        return res.send({msg:"author data is required"})
    }
    if(!book.publisher_id){
        return res.send({msg:"publisher data is required"})
    }
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})  
}


const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorPublisher = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id',).populate('publisher_id')
    res.send({data: specificBook})

}


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorPublisher= getBooksWithAuthorPublisher



// const createBook= async function(req,res) {
//     let book= req.body
//     let authorId= req.body.author_id
//     let publisherId= req.body.publisher
//     if(!authorId) {
//         res.send({msg: "Author Id is not Valid"})
//     }
//     const authorInfo= await authorModel.findById(authorId)
//     if(!authorInfo){
//         res.send({msg: "Please enter a valid Author Id"})
//     }

//     if(!publisherId){
//         res.send({msg: "Publisher Id is not Valid"})
//     }
//     const publisherInfo= await publisherModel.findById(publisherId)
//     if(!publisherInfo){
//         res.send({msg: "Please enter a valid Publisher Id"})
//     }
//     let bookCreated= await bookModel.create(book)
//     res.semd({data: bookCreated})
// }






// const createBook= async function (req, res) {
//     const {author , publisher}= req.body;
//     if(!author || !publisher){
//         return res.send({msg: "This Field is Required"})
//     }else{
//         const authorId = await authorModel.findById(author);
//         const publisherId= await publisherModel.findById(publisher);
//         if(!authorId && !publisherId){
//             return res.send({msg: "author and publisher are not present"})
//         }else{
//               let bookCreated = await bookModel.create(book)
//                 res.send({data: bookCreated})
//             }
//     }
// }

// 


// const createBook= async function (req, res) {
    
//  const author= req.body;
//  if(!author){
//      return res.send({msg: "author field is required"})
//  }else{
//      const authorId= await authorModel.findById(author)
//     if(!authorId){
//         return res.send({msg: "author is not present"})
//     }else{
//         let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
//     }
//     }
// }





    

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }


// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
