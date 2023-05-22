import { DataType, DataTypes } from "sequelize";
import db from "../../db/connections";

const bancosucursal = db.define("bancosucursal",{
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
},{timestamps:false})

export default bancosucursal