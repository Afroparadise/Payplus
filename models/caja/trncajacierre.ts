import db from "../../db/connections";
import { DataTypes } from "sequelize";
import trnsucursalcierre from "../sucursal/trnsucursalcierre";
import trncajacierreretiro from "./trncajacierreretiro";

const trncajacierre = db.define("trncajacierre",{
    SucursalId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    CajaId:DataTypes.INTEGER,
    CierreId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    UsuarioId:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    SucursalCierreId:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    CierreFechaApertura:{
        type:DataTypes.DATE(6),
        allowNull:false
    },
    CierreFechaCierre:DataTypes.DATE(6),
    CierreEstado:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    CierreMontoApertura:{
        type:DataTypes.DECIMAL(19,4),
        allowNull:false,
    },
    CierreSubtotal:DataTypes.DECIMAL(19,4),
    CierreDescuento:DataTypes.DECIMAL(19,4),
    CierreImpuesto:DataTypes.DECIMAL(19,4),
    CierreTotal:DataTypes.DECIMAL(19,4),
    CierreEfectivo:DataTypes.DECIMAL(19,4),
    CierreTarjeta:DataTypes.DECIMAL(19,4),
    CierreCheque:DataTypes.DECIMAL(19,4),
    CierrePuntos:DataTypes.DECIMAL(19,4),
    CierreDeposito:DataTypes.DECIMAL(19,4),
    CierreReversion:DataTypes.DECIMAL(19,4),
    CierreRetiroEfectivo:DataTypes.DECIMAL(19,4),
    CierreRetiroTarjeta:DataTypes.DECIMAL(19,4),
    CierreRetiroCheque:DataTypes.DECIMAL(19,4),
    CierreRepCajero:DataTypes.DECIMAL(19,4),
    CierreDiferencia:DataTypes.DECIMAL(19,4),
    CierreDescripcion:DataTypes.DECIMAL(19,4),
},{
    tableName:"trncajacierre",
    timestamps:false
})

trncajacierre.belongsTo(trnsucursalcierre,{
    foreignKey:"SucursalCierreId",
    targetKey:"SucursalCierreId"
})

trncajacierre.hasMany(trncajacierreretiro,{
    foreignKey:"CierreId",
    sourceKey:"CierreId",
})

export default trncajacierre;