import { DataTypes } from "sequelize";
import db from "../../db/connections";

const acj = db.define("acj",{
    Id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    Oficina:DataTypes.INTEGER,
    Sub:DataTypes.INTEGER,
    Prestamo:DataTypes.INTEGER,
    NombreCliente:DataTypes.STRING(200),
    Identificacion:DataTypes.STRING(30),
    Saldo:DataTypes.DECIMAL(19,4),
    Letra:DataTypes.DECIMAL(19,4),
    Area:DataTypes.STRING(30),
    Provincia:DataTypes.STRING(30),
    Direccion:DataTypes.STRING(400),
    Sexo:DataTypes.STRING(3),
    FormaPago:DataTypes.STRING(30),
    Institucion:DataTypes.STRING(100),
    NombreInstitucion:DataTypes.STRING(200)
},{
    tableName:"acj",
    timestamps:false,
})

export default acj