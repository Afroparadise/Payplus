import { DataType, DataTypes, Model } from "sequelize";
import sequelize from "../../db/connections";

class Mntsucursalxusuario extends Model{}
Mntsucursalxusuario.init({
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
    sequelize,
    modelName:"Mntsucursalxusuario",
    tableName:"mntsucursalxusuario",
    timestamps:true,
    createdAt:"BitacoraFechaInsercion",
    updatedAt:"BitacoraFechaModifica"
})

export default Mntsucursalxusuario;