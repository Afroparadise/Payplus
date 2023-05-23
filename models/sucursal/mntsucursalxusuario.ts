import { DataType, DataTypes } from "sequelize";
import db from "../../db/connections";

const mntsucursalxusuario = db.define("mntsucursalxusuario",{
    SucursalId: {
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    UsuarioId:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    BitacoraUsuarioInserta:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    BitacoraUsuarioModifica:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
},{
    tableName:"mntsucursalxusuario",
    timestamps:true,
    createdAt:"BitacoraFechaInsercion",
    updatedAt:"BitacoraFechaModifica"
})

export default mntsucursalxusuario;