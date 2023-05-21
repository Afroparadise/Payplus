import { DataTypes } from 'sequelize';
import db from '../../db/connections';

const MntSucursal = db.define('mntsucursal',{
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
        type: DataTypes.STRING,
        allowNull:false,
    },
    SucursalDireccion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    SucursalEmail:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    SucursalFax:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    SucursalTelefono:{
        type:DataTypes.STRING,
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
        type:DataTypes.TIME,
    },
    BitacoraUsuarioModifica:{
        type:DataTypes.INTEGER,
    },
    BitacoraFechaModifica:{
        type:DataTypes.TIME,
    },
    Agente:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
},{
    timestamps:false
})
export default MntSucursal