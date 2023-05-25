import { DataTypes, Model } from 'sequelize';
import sequelize from '../../db/connections';
import SegUsuario from './segusuario';
import SegRol from './segrol'

class SegRolxUsuario extends Model{}

SegRolxUsuario.init({
    BitacoraUsuarioInserta: {
        type: DataTypes.INTEGER,
        allowNull:true,
    },
    BitacoraUsuarioModifica: {
        type: DataTypes.INTEGER,
        allowNull:true,
    },
},{
    sequelize,
    timestamps:true,
    createdAt:'BitacoraFechaInsercion',
    updatedAt:'BitacoraFechaModifica',
    tableName:"segrolxusuario",
    modelName:'SegRolxUsuario',

})

SegUsuario.belongsToMany(SegRol,{
    through:SegRolxUsuario,
    as:"Rols",
    sourceKey:'UsuarioId',
    foreignKey:"UsuarioId"
});

SegRol.belongsToMany(SegUsuario,{
    through:SegRolxUsuario,
    as:"Usuarios",
    sourceKey:'RolId',
    foreignKey:'RolId'
});

(async ()=>{ await sequelize.sync()})

export default SegRolxUsuario;