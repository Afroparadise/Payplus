import { Sequelize } from "sequelize";

const db = new Sequelize('ccmpay', 'root', '', {
    
    host: process.env.DBURL || '127.0.0.1',
    dialect:'mysql',
    //logging:false,
    
})
export default db;