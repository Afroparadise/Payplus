import { DataTypes } from 'sequelize';
import db from '../../db/connections';

export default db.define('mntsucursalxusuario',{
    SucursalId:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    UsuarioId: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    BitacoraUsuarioInserta: {
        type: DataTypes.INTEGER,
        allowNull:true,
    },
    BitacoraFechaInsercion: {
        type: DataTypes.DATE(6),
        allowNull:true,
    },
    BitacoraUsuarioModifica: {
        type: DataTypes.INTEGER,
        allowNull:true,
    },
    BitacoraFechaModifica: {
        type: DataTypes.DATE(6),
        allowNull:true,
    },
},{
    timestamps:false
})