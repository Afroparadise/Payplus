import { DataTypes, Sequelize, Model } from 'sequelize';
import sequelize from '../../db/connections';
import Usuario from '../users/segusuario'

import Trnsucursalcierre from './trnsucursalcierre';
import Mntsucursalensa from './mntsucursalensa';
import Mntsucursalfenosa from './mntsucursalfenosa';
import Trnfacturapuntos from './trnfacturapuntos';
import Mntcaja from '../caja/mntcaja';

class Mntsucursal extends Model{}
Mntsucursal.init({
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
    sequelize,
    modelName:"Mntsucursal",
    tableName:'mntsucursal',
    timestamps:true,
    createdAt:"BitacoraFechaInsercion",
    updatedAt:"BitacoraFechaModifica"
});


Mntsucursal.hasMany(Mntsucursalensa,{
    foreignKey:"SucursalId",
    sourceKey:"SucursalId"
});

Mntsucursalensa.belongsTo(Mntsucursal,{
    foreignKey:"SucursalId"
});

Mntsucursal.hasMany(Mntsucursalfenosa,{
    foreignKey:"SucursalId"
});

Mntsucursalfenosa.belongsTo(Mntsucursal,{
    foreignKey:"SucursalId"
});

Mntsucursal.hasMany(Trnfacturapuntos,{
    foreignKey:"SucursalId"
});

Trnfacturapuntos.belongsTo(Mntsucursal,{
    foreignKey:"SucursalId"
});

Mntsucursal.hasMany(Mntcaja,{
    foreignKey:"SucursalId"
})

Mntcaja.belongsTo(Mntsucursal,{
    foreignKey:"SucursalId"
});

(async()=>{
    await sequelize.sync();
})

export default Mntsucursal;
