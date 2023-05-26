import sequelize from "../../db/connections";
import { DataTypes, Model } from "sequelize";
import segusuario from './segusuario'
import SegRolxUsuario from "./segrolxusuario";


class SegRol extends Model{}
SegRol.init({
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
    sequelize,
    modelName:'SegRol',
    timestamps:true,
    createdAt:"BitacoraFechaInsercion",
    updatedAt:'BitacoraFechaModifica',
    tableName:"segrol"
})


export default SegRol;