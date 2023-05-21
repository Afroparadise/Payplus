import { DataTypes } from 'sequelize';
import db from '../../db/connections';

export default db.define('segsistemaxtipousuario',{
    TipoUsuario:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    OpcionSistema: {
        type: DataTypes.INTEGER,
        allowNull:false
    }
},{
    timestamps:false
})