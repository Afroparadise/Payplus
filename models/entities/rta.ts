import { DataTypes, Model } from "sequelize";
import sequelize from '../../db/connections';
import SegUsuario from "../users/segusuario";
class Rta extends Model{}

Rta.init({
    idRTA:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    fechaEntrada:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    fechaSalida:DataTypes.DATE,
    punch:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    Usuario_idUsuario:DataTypes.INTEGER,
},{
    sequelize,
    modelName:"Rta",
    tableName:"rta",
    timestamps:false,
});

(async () => {
    await sequelize.sync();
})
export default Rta;