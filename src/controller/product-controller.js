import connection from "../config/index.js";

const db = connection.db(process.env.DB_NAME).collection("product")
const findAll = async (req, res) => {
    const {limit, offset} = req.query
    const result =  await db.find({},{
        limit: parseInt(limit) || 20,
        skip: parseInt(offset) || 0
    }).sort({product_id: 1}).toArray()
    res.status(200).json({
        data: result,
        total: result.length,
        limit: limit,
        offset: offset
    })
}

const findOne = async (req, res) => {
    const productId = req.params.product_id
    const result = await db.find({product_id: productId});
    res.status(200).json({
        data: result,
        message: "Product found successfully"
    })
}
const edit = async (req, res) => {
    const updateData = req.body
    console.log(JSON.stringify(req.body))
    const productId = req.params.id
    const result = await db.updateOne({product_id: productId}, {$set: updateData})
    res.status(200).json({
        data: result,
        message: "Product updated successfully"
    })
}
const remove = async (req, res) => {
    const result =  await db.deleteOne({product_id: req.params.id})
    res.status(200).json({
        data: result,
        message: "Product deleted successfully"
    })
}
export default {
    findAll,
    findOne,
    edit,
    remove
}