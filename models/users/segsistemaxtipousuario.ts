import { DataTypes, Model } from 'sequelize';
import sequelize from '../../db/connections';

class Segsistemaxtipousuario extends Model{}


Segsistemaxtipousuario.init({
    TipoUsuario:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    OpcionSistema: {
        type: DataTypes.INTEGER,
        allowNull:false
    }
},{
    sequelize,
    modelName:"Segsistemaxtipousuario",
    timestamps:false,
    tableName:"segsistemaxtipousuario"
});

export default Segsistemaxtipousuario;