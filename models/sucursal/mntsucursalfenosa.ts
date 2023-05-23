import { DataType, DataTypes } from "sequelize";
import db from "../../db/connections";

import mntsucursal from "./mntsucursal";

const mntsucursalfenosa =  db.define("mntsucursalfenosa",{
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
},{
    tableName:"mntsucursalfenosa",
    timestamps:false
})

mntsucursalfenosa.belongsTo(mntsucursal,{
    foreignKey:"SucursalId"
})

export default mntsucursalfenosa;