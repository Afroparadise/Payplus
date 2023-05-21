import { DataTypes } from 'sequelize';
import db from '../../db/connections';

const UserPicDetails = db.define('userpicdetails',{
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
    timestamps:false
})
export default UserPicDetails