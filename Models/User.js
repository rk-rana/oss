
import sequelize from '../config/coonect.js'

import sql from 'sequelize'
const DataTypes = sql.DataTypes


const User = sequelize.define('userSchema', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    
    userName : {
        type : DataTypes.STRING,
        unique : true,
        allowNull: false,
    },

    password : {
        type: DataTypes.TEXT,
        allowNull: false,
        is: /^[0-9a-f]{64}$/i,
    },

    
    locationFromVerticalRoad : {
        type :DataTypes.INTEGER, 
        allowNull: false,   
    },
    
    locationFromHorizontalRoad : {
        type :DataTypes.INTEGER,
        allowNull: false,
    },

},
{
    tableName: 'User',
    timestamps: true,
})

User.sync();

export default User