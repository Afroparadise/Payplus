import { DataType, DataTypes } from "sequelize";
import db from "../../db/connections";

export default db.define("mntsucursalensa",{
    SucursalId: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    id_sucursal: {
        type:DataTypes.STRING,
        primaryKey:true,
        allowNull:false,
    },
    lugar_pago:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},{timestamps:false})