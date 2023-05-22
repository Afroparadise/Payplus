import { DataTypes, Sequelize, Model } from 'sequelize';
import db from '../../db/connections';
import Usuario from '../users/segusuario'

class MntSucursal extends Model{}

MntSucursal.init({
    SucursalId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
    },
    ZonaId: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    CiudadId: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    SucursalNombre: {
        type: DataTypes.STRING(60),
        allowNull:false,
    },
    SucursalDireccion:{
        type:DataTypes.STRING(500),
        allowNull:false,
    },
    SucursalEmail:{
        type:DataTypes.STRING(60),
        allowNull:false,
    },
    SucursalFax:{
        type:DataTypes.STRING(60),
        allowNull:false,
    },
    SucursalTelefono:{
        type:DataTypes.STRING(60),
        allowNull:false,
    },
    SucursalAdministrador:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    BitacoraUsuarioInserta:{
        type:DataTypes.INTEGER
    },
    BitacoraFechaInsercion:{
        type:DataTypes.DATE(6),
    },
    BitacoraUsuarioModifica:{
        type:DataTypes.INTEGER,
    },
    BitacoraFechaModifica:{
        type:DataTypes.DATE(6),
    },
    Agente:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
},{
    sequelize:db,
    timestamps:false
})

// MntSucursal.hasMany(Usuario,{
//     foreignKey:'SucursalId',
//     sourceKey:'SucursalId'
// })
export default MntSucursal
