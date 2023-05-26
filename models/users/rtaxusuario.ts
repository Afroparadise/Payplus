import { DataTypes, Model } from 'sequelize';
import sequelize from '../../db/connections';
import SegUsuario from './segusuario';
import Rta from '../entities/rta';

class Rtaxusuario extends Model{}

Rtaxusuario.init({
    RTA_idRTA:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:false
    },
    Usuario_idUsuario: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    fechaEntrada: {
        type: DataTypes.DATE(6),
        allowNull:false,
    },
    fechaSalida: {
        type: DataTypes.DATE(6),
        allowNull:false,
    },
    punch: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
},{
    sequelize,
    modelName:'Rtaxusuario',
    tableName:'rtaxusuario',
    timestamps:false,
});

SegUsuario.belongsToMany(Rta,{
    through:"rtaxusuario",
    foreignKey:"Usuario_idUsuario",
    as:"Rtas",
    timestamps:false
});
Rta.belongsToMany(SegUsuario,{
    through:"rtaxusuario",
    foreignKey:"RTA_idRTA",
    sourceKey:"idRTA",
    as:"Usuarios",
    timestamps:false
});

(async()=>{
    await sequelize.sync();
})

export default Rtaxusuario;