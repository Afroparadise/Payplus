import { DataTypes, Model } from 'sequelize';
import sequelize from '../../db/connections';

class Rtaxusuario extends Model{}

Rtaxusuario.init({
    RTA_idRTA:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
    },
    Usuario_idUsuario: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    fechaEntrada: {
        type: DataTypes.DATE(6),
        allowNull:false,
    },
    fechaSalida: {
        type: DataTypes.DATE(6),
        allowNull:false,
    },
    punch: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
},{
    sequelize,
    modelName:'Rtaxusuario',
    timestamps:false,
    tableName:'rtaxusuario'
})

export default Rtaxusuario;