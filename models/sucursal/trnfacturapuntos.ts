import { DataType, DataTypes } from "sequelize";
import db from "../../db/connections";

export default db.define("mntsucursalxusuario",{
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
},{timestamps:false,})