const mongoose = require('mongoose');
const ObjectId= mongoose.Schema.Types.ObjectId
const orderSchema= new mongoose.Schema({
    userId:{
        type: ObjectId,
        ref: "customerSchema"
    },
    productId: {
        type: ObjectId,
        ref: "productSchema"
    },
    amount: Number,
    isFreeAppUser: {
        type: Boolean,
        default: false
    },
    date: {
        type: String
    }
}, { timestamps: true })
module.exports= mongoose.model("orderSchema", orderSchema)



