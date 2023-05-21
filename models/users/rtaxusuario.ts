import { DataTypes } from 'sequelize';
import db from '../../db/connections';

export default db.define('rtaxusuario',{
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
        type: DataTypes.DATE,
        allowNull:false,
    },
    fechaSalida: {
        type: DataTypes.DATE,
        allowNull:false,
    },
    punch: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
},{
    timestamps:false
})