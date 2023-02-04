import connection from "../config/index.js";

const db = connection.db(process.env.DB_NAME).collection("seller")

const updateAccount = async (req, res) => {
    const updateData = req.body
    const sellerId = req.params.seller_id
    const result =  await db.updateOne({seller_id: sellerId}, {$set: updateData})
    res.status(200).json({
        data: result,
        message: "Seller updated successfully"
    })
}


export default {
    updateAccount
}