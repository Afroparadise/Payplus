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
    updatedAt:'BitacoraFechaModifica'
})

Users.belongsToMany(rols,{
    through:"segrolxusuario",
})

rols.belongsToMany(Users,{
    through:'segrolxusuario'
})