import sequelize from '../config/coonect.js'

import sql from 'sequelize'
const DataTypes = sql.DataTypes

const Shops = sequelize.define('shopSchema', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    Name : {
        type :DataTypes.STRING,
        required : true,
        allowNull: false  
    },

    Category : {
        type : DataTypes.STRING,
       allowNull: false
    },
    
    locationFromVerticalRoad : {
        type :DataTypes.INTEGER, 
       // required : true    
    },
    
    locationFromHorizontalRoad : {
        type : DataTypes.INTEGER,
    //    allowNull: false
     },

    // shopkeeper : {
    //     type : DataTypes.INTEGER,
    //     references : {
    //         model : 'Shopkeeper',
    //         key : "id"
    // }
// },

    deliveryAvailable : {
        type : DataTypes.BOOLEAN,
    //    allowNull: false
    },

    reviews : {
        type : DataTypes.INTEGER,
        max : 5,
        default : 5
    }
},{
associate: models => {
    Shops.hasMany(models.Shopkeeper, {
        foreignKey:{name: 'Shop_id',allowNull: false}
    });
}
},
{
    tableName: 'Shops',
    timestamps: true,
});

associate: models => {
    Shops.hasMany(models.Shopkeeper, {
        foreignKey:{name: 'Shop_id',allowNull: false}
    })
}


Shops.sync(); 


export default Shops