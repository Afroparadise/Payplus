import db from "../../db/connections";
import { DataTypes } from "sequelize";
import Users from './segusuario'

const segrol = db.define("segrol",{
    RolId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true
    },
    RolNombre:DataTypes.STRING(60),
    RolDescripcion:DataTypes.STRING(60),
    BitacoraUsuarioInserta:DataTypes.INTEGER,
    BitacoraUsuarioModifica:DataTypes.INTEGER
},{
    timestamps:true,
    createdAt:"BitacoraFechaInsercion",
    updatedAt:'BitacoraFechaModifica',
    tableName:"segrol"
})


export default segrol;