const { Sequelize, Model, DataTypes } =  require('sequelize');

const sequelize = new Sequelize(
    'gsb_frais',
    'root',
    '', {
    host : 'localhost',
    dialect: 'mysql',
})
    module.exports.test = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}