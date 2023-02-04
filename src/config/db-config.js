import * as dotenv from 'dotenv'
dotenv.config()
const db = ()=>{
    return{
        HOST: process.env.DB_HOST,
        PORT: process.env.DB_PORT,
        USER: process.env.DB_USERNAME,
        PASSWORD: process.env.DB_PASSWORD,
        NAME: process.env.DB_NAME
    }
}
export default db