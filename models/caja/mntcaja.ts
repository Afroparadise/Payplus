import db from "../../db/connections"
import segusuario from '../users/segusuario'
import MntSucursal from "../sucursal/mntsucursal"
import { DataTypes } from "sequelize"
const mntcaja = db.define("mntcaja",{
    CajaId: {type:DataTypes.INTEGER,allowNull:false},
    CajaDescription:{type:DataTypes.STRING(60),allowNull:false},
    CajaFactura:{type:DataTypes.INTEGER,allowNull:false},
    CajaActiva:{type:DataTypes.TINYINT,allowNull:false},
    CajaMontoAlertaRetiro:{type:DataTypes.DECIMAL(19,4),allowNull:false},
    CajaMontoBloqueo:{type:DataTypes.DECIMAL(19,4),allowNull:false},
    BitacoraUsuarioInserta:DataTypes.INTEGER,
    BitacoraUsuarioModifica:DataTypes.INTEGER
},{
    tableName:"mntcaja",
    timestamps:true,
    createdAt:"BitacoraFechaInsercion",
    updatedAt:"BitacoraFechaModifica"
})

mntcaja.belongsTo(MntSucursal,{
    foreignKey:"SucursalId",
    targetKey:"SucursalId"
})
mntcaja.belongsTo(segusuario,{
    foreignKey:"UsuarioId",
    targetKey:"UsuarioId"
})

export default mntcaja