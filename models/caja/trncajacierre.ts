import sequelize from "../../db/connections";
import { DataTypes, Model, Sequelize } from "sequelize";
import Trnsucursalcierre from "../sucursal/trnsucursalcierre";
import trncajacierreretiro from "./trncajacierreretiro";

class Trncajacierre extends Model{}  

Trncajacierre.init({
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
    sequelize,
    modelName:'Trncajacierre',
    tableName:"trncajacierre",
    timestamps:false
})

Trncajacierre.belongsTo(Trnsucursalcierre,{
    foreignKey:"SucursalCierreId",
    targetKey:"SucursalCierreId"
})

Trncajacierre.hasMany(trncajacierreretiro,{
    foreignKey:"CierreId",
    sourceKey:"CierreId",
});

(async()=>{
    await sequelize.sync();
})

export default Trncajacierre;