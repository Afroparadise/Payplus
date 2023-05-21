import { DataType, DataTypes } from "sequelize";
import db from "../../db/connections";

export default db.define("mntsucursalfenosa",{
    SucursalId: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    codigo: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
    },
    CentroCobro:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
},{timestamps:false})