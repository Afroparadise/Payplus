import { Sequelize } from "sequelize";

const sequelize = new Sequelize('ccmpay', 'root', '', {
    
    host: process.env.DBURL || '127.0.0.1',
    dialect:'mysql',
    //logging:false,
    
})
export default sequelize;