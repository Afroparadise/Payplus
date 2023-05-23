import { DataType, DataTypes } from "sequelize";
import db from "../../db/connections";
import mntsucursal from "./mntsucursal";

const mntsucursalensa = db.define("mntsucursalensa",{
    SucursalId: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    id_sucursal: {
        type:DataTypes.STRING(4),
        primaryKey:true,
        allowNull:false,
    },
    lugar_pago:{
        type:DataTypes.STRING(60),
        allowNull:false,
    }
},{
    tableName:"mntsucursalensa",
    timestamps:false
})

mntsucursalensa.belongsTo(mntsucursal,{
    foreignKey:"SucursalId",
    targetKey:"SucursalId"
})

export default mntsucursalensa;