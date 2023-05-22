import db from "../../db/connections";
import { DataTypes } from "sequelize";
import Users from './segusuario'

const segrol = db.define("segrol",{
    RolId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true
    },
    RolName:DataTypes.STRING(60),
    RolDescription:DataTypes.STRING(60),
    BitacoraUsuarioInserta:DataTypes.INTEGER,
    BitacoraUsuarioModifica:DataTypes.INTEGER
},{
    timestamps:true,
    createdAt:"BitacoraFechaInsercion",
    updatedAt:'BitacoraFechaModifica'
})


export default segrol;