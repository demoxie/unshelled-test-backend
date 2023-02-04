import connection from "../config/index.js";

const db = connection.db(process.env.DB_NAME).collection("order")
const findAll = async (req, res) => {
    const limit = parseInt(req.query.limit) || 20
    const page = parseInt(req.query.offset) || 0
    console.log(limit, page)
    const result =  await db.find({},{
        limit: limit,
        skip: page
    }).sort({price: 1}).toArray()
    res.status(200).json({
        data: result,
        total: result.length,
        limit: limit,
        offset: page
    })
}
const remove = async (req, res) => {
    const result =  await db.deleteOne({order_id: req.params.id})
    res.status(200).json({
        data: result,
        message: "Order deleted successfully"
    })
}

export default {
    findAll,
    remove
}