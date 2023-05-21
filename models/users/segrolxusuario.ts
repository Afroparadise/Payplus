import { DataTypes } from 'sequelize';
import db from '../../db/connections';

export default db.define('segrolxusuario',{
    usuarioId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
    },
    RolId: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    BitacoraUsuarioInserta: {
        type: DataTypes.INTEGER,
        allowNull:true,
    },
    BitacoraFechaInsercion: {
        type: DataTypes.DATE,
        allowNull:true,
    },
    BitacoraUsuarioModifica: {
        type: DataTypes.INTEGER,
        allowNull:true,
    },
    BitacoraFechaModifica: {
        type: DataTypes.DATE,
        allowNull:true,
    },
},{
    timestamps:false
})