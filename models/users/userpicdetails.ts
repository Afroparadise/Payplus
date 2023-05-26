import { DataTypes, Model } from 'sequelize';
import sequelize from '../../db/connections';

class Userpicdetails extends Model{}

Userpicdetails.init({
    AutoID:{
        type:DataTypes.INTEGER,
        primaryKey:true,
    },
    UserImagename: {
        type: DataTypes.STRING,
        allowNull:true,
    },
    UserImagePath: {
        type: DataTypes.STRING,
        allowNull:true,
    },
    UserID: {
        type: DataTypes.INTEGER,
        allowNull:true,
    }
},{
    sequelize,
    modelName:'userpicdetails',
    tableName:'Userpicdetails',
    timestamps:false
})
export default Userpicdetails