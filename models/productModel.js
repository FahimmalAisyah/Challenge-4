

module.exports = (sequelize, DataTypes) =>{
    const Product = sequelize.define("product", {
        nama: {
            type: DataTypes.STRING,
            allowNull : false,
        },
        sewa: {
            type: DataTypes.INTEGER
        },
        ukuran: {
            type: DataTypes.STRING
        },
        foto:{
            type:DataTypes.STRING
        },
    })

    return Product

}