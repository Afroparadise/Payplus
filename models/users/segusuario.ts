import { DataTypes, Model } from 'sequelize';
import sequelize from '../../db/connections';
import sucursal from '../sucursal/mntsucursal'
import segrol from './segrol';
import SegRolxUsuario from './segrolxusuario';
import Mntcaja from '../caja/mntcaja';
import Rta from '../entities/rta';

class SegUsuario extends Model{}

SegUsuario.init({
    UsuarioId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    UsuarioApellido1: {
        type: DataTypes.STRING(60),
        allowNull:false,
    },
    UsuarioApellido2: {
        type: DataTypes.STRING(60),
        allowNull:false,
    },
    UsuarioNombre: {
        type: DataTypes.STRING(60),
        allowNull:false,
    },
    UsuarioTelefono: {
        type: DataTypes.STRING(60),
    },
    UsuarioCelular: {
        type: DataTypes.STRING(60),
    },
    UsuarioDireccion: {
        type: DataTypes.STRING(500),
    },
    UsuarioLogin: {
        type: DataTypes.STRING(60),
        allowNull:false,
    },
    UsuarioPassword: {
        type: DataTypes.STRING(32),
        allowNull:false,
    },
    UsuarioEmail: {
        type: DataTypes.STRING(60)
    },
    UsuarioCambiaClave: {
        type: DataTypes.TINYINT,
        allowNull:false,
    },
    UsuarioActivo: {
        type: DataTypes.TINYINT,
        allowNull:false,
    },
    BitacoraUsuarioInserta:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    BitacoraFechaInsercion:{
        type:DataTypes.DATE(6),
        allowNull:true,
    },
    BitacoraUsuarioModifica:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    BitacoraFechaModifica:{
        type:DataTypes.DATE(6),
        allowNull:true,
    },
    UsuarioIdentificacion:{
        type:DataTypes.STRING(16),
        allowNull:false,
    },
    UsuarioTipo:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
},{
    sequelize,
    modelName:"SegUsuario",
    timestamps:true,
    createdAt:"BitacoraFechaInsercion",
    updatedAt:"BitacoraFechaModifica",
    tableName:'segusuario',
});

SegUsuario.hasMany(Rta,{
    foreignKey:"Usuario_idUSuario",
});
Rta.belongsTo(SegUsuario,{
    foreignKey:"Usuario_idUsuario"
});

(async () => {
    await sequelize.sync();
})();
export default SegUsuario;