import { DataTypes } from 'sequelize';
import db from '../db/connections';

const Users = db.define('Users',{
    FirstName: {
        type: DataTypes.STRING
    },
    LastName: {
        type: DataTypes.STRING
    },
    Email: {
        type: DataTypes.STRING
    },
    Password: {
        type: DataTypes.STRING
    },
    EmailVerification: {
        type: DataTypes.TINYINT
    },
    ActiventionCode: {
        type: DataTypes.STRING
    },
    OTP: {
        type: DataTypes.STRING
    },
    TipoUsuario: {
        type: DataTypes.INTEGER
    },
    FechaRegistro: {
        type: DataTypes.TIME
    },
          

})
export default Users