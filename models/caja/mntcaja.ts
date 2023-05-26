import sequelize from "../../db/connections"
import segusuario from '../users/segusuario'
import MntSucursal from "../sucursal/mntsucursal"
import { DataTypes, Model, Sequelize } from "sequelize"

class Mntcaja extends Model{}

Mntcaja.init({
    CajaId: {type:DataTypes.INTEGER,allowNull:false,primaryKey:false},
    CajaDescription:{type:DataTypes.STRING(60),allowNull:false},
    CajaFactura:{type:DataTypes.INTEGER,allowNull:false},
    CajaActiva:{type:DataTypes.TINYINT,allowNull:false},
    CajaMontoAlertaRetiro:{type:DataTypes.DECIMAL(19,4),allowNull:false},
    CajaMontoBloqueo:{type:DataTypes.DECIMAL(19,4),allowNull:false},
    BitacoraUsuarioInserta:DataTypes.INTEGER,
    BitacoraUsuarioModifica:DataTypes.INTEGER
},{
    sequelize,
    modelName:'Mntcaja',
    tableName:"mntcaja",
    timestamps:true,
    createdAt:"BitacoraFechaInsercion",
    updatedAt:"BitacoraFechaModifica",
});

segusuario.belongsToMany(MntSucursal,{
    through:"Mntcaja",
    foreignKey:"UsuarioId",
    as:"Sucursales"
});

MntSucursal.belongsToMany(segusuario,{
    through:"Mntcaja",
    foreignKey:"SucursalId",
    as:'Usuarios'
});

(async()=>{
    await sequelize.sync();
})

export default Mntcaja;