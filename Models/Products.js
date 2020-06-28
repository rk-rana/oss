import sequelize from '../config/coonect.js'

import sql from 'sequelize'
const DataTypes = sql.DataTypes

const Products = sequelize.define('productSchema',{

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    Name : {
        type : DataTypes.STRING,
        allowNull: false
    },

    priceInInr : {
        type : DataTypes.INTEGER,
       allowNull: false
    },

    features : {
        type : Array,
       allowNull: false
    },

    piecesAvailable : {
        type : DataTypes.INTEGER,
       allowNull: false
    },

    shop : {
        type : DataTypes.INTEGER,
        references : {
            model:'Shop',
            key : "id"
    }
    }
},
{
    tableName: 'Products',
    timestamps: true,
});

Products.sync();

    export default Products
    




