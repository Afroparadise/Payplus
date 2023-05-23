import { DataTypes, Sequelize, Model } from 'sequelize';
import db from '../../db/connections';
import Usuario from '../users/segusuario'

import trnsucursalcierre from './trnsucursalcierre';
import mntsucursalensa from './mntsucursalensa';
import mntsucursalfenosa from './mntsucursalfenosa';
import trnfacturapuntos from './trnfacturapuntos';

const mntsucursal = db.define("mntsucursal",{
    SucursalId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
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
    tableName:'mntsucursal',
    timestamps:true,
    createdAt:"BitacoraFechaInsercion",
    updatedAt:"BitacoraFechaModifica"
})

mntsucursal.hasMany(trnsucursalcierre,{
    foreignKey:"SucursalId",
    sourceKey:"SucursalId"
})

mntsucursal.hasMany(mntsucursalensa,{
    foreignKey:"SucursalId",
    sourceKey:"SucursalId"
})

mntsucursal.hasMany(mntsucursalfenosa,{
    foreignKey:"SucursalId"
})

mntsucursal.hasMany(trnfacturapuntos,{
    foreignKey:"SucursalId"
})

export default mntsucursal
