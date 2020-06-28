import sequelize from '../config/coonect.js'

import sql from 'sequelize'
const DataTypes = sql.DataTypes


const Shopkeeper = sequelize.define('shopkeeperSchema',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    userName : {
        type : DataTypes.STRING,
        allowNull: false,
        unique : true
    },

    password : {
        type: DataTypes.TEXT,
        allowNull: false,
        is: /^[0-9a-f]{64}$/i,
        msg: "Password in wrong formate or not given",
    }
    },
{
    associate: models => {
        Shopkeeper.belongsToMany(models.Shops, {
            foreignKey: {name: 'shopkeeper_id', allowNull: false}
        })
    }
},
    
{
    tableName: 'Shopkeeper',
    timestamps: true,
});



Shopkeeper.sync();

export default Shopkeeper