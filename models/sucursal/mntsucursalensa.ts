import { DataType, DataTypes, Model } from "sequelize";
import sequelize from "../../db/connections";
import mntsucursal from "./mntsucursal";

class Mntsucursalensa extends Model{}

Mntsucursalensa.init({
    SucursalId: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    id_sucursal: {
        type:DataTypes.STRING(4),
        primaryKey:true,
        allowNull:false,
    },
    lugar_pago:{
        type:DataTypes.STRING(60),
        allowNull:false,
    }
},{
    sequelize,
    modelName:"Mntsucursalensa",
    tableName:"mntsucursalensa",
    timestamps:false
});

Mntsucursalensa.belongsTo(mntsucursal,{
    foreignKey:"SucursalId",
    targetKey:"SucursalId"
});

(async () => {
    await sequelize.sync();
})
export default Mntsucursalensa;