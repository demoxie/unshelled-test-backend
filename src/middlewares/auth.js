import connection from "../config/db.js"
const db = connection.db(process.env.DB_NAME).collection("seller")
export const authenticateUser = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    const credentials = atob(token)
    const [username, password] = credentials.split(':')
    const query = {seller_id: username, seller_zip_code_prefix: password}
    db.findOne(query).then((result) => {
        if (result) {
            next()
        } else {
            res.sendStatus(403)
        }
    }).catch((err) => {
        res.sendStatus(403)
    });
}
