const mongoose = require('mongoose');

const bookSchema1 = new mongoose.Schema(
    {
        bookName:{
            type: String,
            require: true,
        },
        price: {
            indianPrice: String,
            europeanPrice: String,
        },
        year: {
            type: Number, default: 2021,
        },
        tags: [String],
        totalPages: Number,
         stockAvailable: Boolean,
    }, {timestamps: true}
)

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: {type: Number, default: 10}
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema)
//  //users
module.exports = mongoose.model('Booklet', bookSchema1)
//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
