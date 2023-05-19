import { Sequelize } from "sequelize";

const db = new Sequelize('ccmpay', 'root', '', {
    
    host: 'localhost',
    dialect:'mysql',
    //logging:false,

})
export default db;