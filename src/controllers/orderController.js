const customerModel= require("../models/customerModel")
const productModel= require("../models/productModel")
const orderModel= require("../models/orderModel")
const createOrder = async function (req, res) {
    let data = req.body;
    let uId = await customerModel.findById(req.body.userId)
    let pId = await productModel.findById(req.body.productId)
    let str = ""
    let saveData
    if (!data.userId)
        res.send({ msg: "User ID is required" })
    else if (!uId)
        res.send({ msg: "Enter valid User ID" })
    else if (!data.productId)
        res.send({ msg: "Product ID is required" })
    else if (!pId)
        res.send({ msg: "Enter valid Product ID" })
    else {
        saveData = await orderModel.create(data);
        if (req.headers["isfreeappuser"] === "true") {
            await orderModel.updateOne({ userId: data.userId }, { $set: { amount: 0 } }, { new: true })
        }
        else {
            let pPrice = pId.price;
            if (uId.balance >= pPrice) {
                await customerModel.updateOne({ _id: data.userId }, { $inc: { balance: -pPrice } }, { new: true })
                await orderModel.updateOne({ _id: saveData._id }, { $set: { amount: pPrice } }, { new: true })
                res.send({ msg: saveData });
            }
            else res.send({ msg: "user doesn't have enough balance" })
        }

    }
}
module.exports.createOrder= createOrder