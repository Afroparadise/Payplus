import { DataType, DataTypes } from "sequelize";
import db from "../../db/connections";

export default db.define("mntsucursalfenosa",{
    SucursalCierreId: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    SucursalId: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
    },
    SucursalEstado:{
        type:DataTypes.STRING(20),
        allowNull:false,
    },
    SucursalFechaApertura:{
        type:DataTypes.DATE(6),
        allowNull:false,
    },
    SucursalFechaCierre:{
        type:DataTypes.DATE(6),
        allowNull:true,
    },
    TotalCajasAbiertas:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    TotalCajasRecaudado:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    TotalCajasReversos:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    UsuarioIdApertura:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    UsuarioIdCierre:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
},{timestamps:false})