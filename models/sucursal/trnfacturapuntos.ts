import { DataType, DataTypes, Model } from "sequelize";
import sequelize from "../../db/connections";

import mntsucursal from "./mntsucursal";

class Trnfacturapuntos extends Model{}

Trnfacturapuntos.init({
    TransaccionId: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
    },
    ClienteId:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    SucursalId:{
        type:DataTypes.INTEGER,
        allowNull:true,
        
    },
    CajeroId:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    CantidadCanje:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    Fecha:{
        type:DataTypes.DATE(6),
        allowNull:true,
    },
},{
    sequelize,
    modelName:"Trnfacturapuntos",
    tableName:"trnfacturapuntos",
    timestamps:false,
});


(async () => {
    await sequelize.sync();
})

export default Trnfacturapuntos;