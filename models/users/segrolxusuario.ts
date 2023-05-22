import { DataTypes } from 'sequelize';
import db from '../../db/connections';
import Users from './segusuario';
import rols from './segrol'

export default db.define('segrolxusuario',{
    BitacoraUsuarioInserta: {
        type: DataTypes.INTEGER,
        allowNull:true,
    },
    BitacoraUsuarioModifica: {
        type: DataTypes.INTEGER,
        allowNull:true,
    },
},{
    timestamps:true,
    createdAt:'BitacoraFechaInsercion',
    updatedAt:'BitacoraFechaModifica',
    tableName:"segrolxusuario"
})

Users.belongsToMany(rols,{
    through:"segrolxusuario",
    as:"Rols",
    sourceKey:'UsuarioId',
    foreignKey:"UsuarioId"
});

rols.belongsToMany(Users,{
    through:'segrolxusuario',
    as:"Usuarios",
    sourceKey:'RolId',
    foreignKey:'RolId'
});

(async ()=>{ await db.sync()})