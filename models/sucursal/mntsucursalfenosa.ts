import { DataType, DataTypes, Model } from "sequelize";
import sequelize from "../../db/connections";

import mntsucursal from "./mntsucursal";

class Mntsucursalfenosa extends Model{}
Mntsucursalfenosa.init({
    SucursalId: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    codigo: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
    },
    CentroCobro:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
},{
    sequelize,
    modelName:"Mntsucursalensa",
    tableName:"mntsucursalfenosa",
    timestamps:false
});

Mntsucursalfenosa.belongsTo(mntsucursal,{
    foreignKey:"SucursalId"
});

(async()=>{
    await sequelize.sync();
})

export default Mntsucursalfenosa;