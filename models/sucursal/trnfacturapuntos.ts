import { DataType, DataTypes } from "sequelize";
import db from "../../db/connections";

import mntsucursal from "./mntsucursal";

const trnfacturapuntos =  db.define("trnfacturapuntos",{
    TransaccionId: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
    },
    ClienteId:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    SucursalId:{
        type:DataTypes.INTEGER,
        allowNull:true,
        
    },
    CajeroId:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    CantidadCanje:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    Fecha:{
        type:DataTypes.DATE(6),
        allowNull:true,
    },
},{
    tableName:"trnfacturapuntos",
    timestamps:false,
})

trnfacturapuntos.belongsTo(mntsucursal,{
    foreignKey:"SucursalId",
    targetKey:"SucursalId",
})

export default trnfacturapuntos;