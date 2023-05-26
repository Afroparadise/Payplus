import { DataType, DataTypes, Model } from "sequelize";
import sequelize from "../../db/connections";

class Bancosucursal extends Model{}

Bancosucursal.init({
    COD_Banco: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    COD_Sucursal: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
    },
    NombreSucursal:{
        type:DataTypes.STRING(300),
        allowNull:false,
    }
},{
    sequelize,
    modelName:"Bancosucursal",
    timestamps:false
})

export default Bancosucursal