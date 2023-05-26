import { DataType, DataTypes, Model } from "sequelize";
import sequelize from "../../db/connections";

import trncajacierre from "../caja/trncajacierre";
import Mntsucursal from "./mntsucursal";

class Trnsucursalcierre extends Model{}

Trnsucursalcierre.init({
    SucursalCierreId: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
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
},{
    sequelize,
    modelName:"Trnsucursalcierre",
    tableName:"trnsucursalcierre",
    timestamps:false
});

Mntsucursal.hasMany(Trnsucursalcierre,{
    foreignKey:"SucursalId",
    sourceKey:"SucursalId"
})

Trnsucursalcierre.belongsTo(Mntsucursal,{
    foreignKey:'SucursalId'
});

(async () => {
    await sequelize.sync();
})

export default Trnsucursalcierre;