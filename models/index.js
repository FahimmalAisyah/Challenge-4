const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.db,
    dbConfig.user,
    dbConfig.password,
    {
        port:dbConfig.port,
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        operatorAliases: false,

        pool:{
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        }


    }
)

sequelize.authenticate()
.then(()=>{
    console.log('connected');
})
.catch((err)=>{
    console.log('ERROR ' + err);
})

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require('./productModel.js')(sequelize, DataTypes);

db.sequelize.sync({force: false})
.then(()=>{
    console.log("resync Done")
})

module.exports = db;