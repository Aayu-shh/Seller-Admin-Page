const { Sequelize } = require('sequelize');
const sequelize = require('../util/database');

const Product = sequelize.define('product',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:{
        type: Sequelize.INTEGER
    }
});

module.exports = Product;