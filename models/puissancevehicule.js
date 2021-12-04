const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('puissancevehicule', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    puissance: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    typevehicule: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    prixkm: {
      type: DataTypes.DECIMAL(3,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'puissancevehicule',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
