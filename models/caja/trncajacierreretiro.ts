import { DataTypes } from "sequelize";
import sequelize from "../../db/connections";
import trncajacierre from "./trncajacierre";
const trncajacierreretiro = sequelize.define("trncajacierreretiro",{
    SucursalId:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    CajaId:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    CierreId:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    RetiroId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    UsuarioId:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    RetiroFecha:{
        type:DataTypes.DATE(6),
        allowNull:false,
    },
    RetiroUsuarioAutoriza:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    RetiroEfectivo:DataTypes.DECIMAL(19,4),
    RetiroTarjeta:DataTypes.DECIMAL(19,4),
    RetiroCheque:DataTypes.DECIMAL(19,4),
    RetiroTotal:DataTypes.DECIMAL(19,4),
},{
    tableName:"trncajacierreretiro"
})

trncajacierreretiro.belongsTo(trncajacierre,{
    foreignKey:"CierreId",
    targetKey:'CierreId'
})

export default trncajacierreretiro