const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fraisforfait', {
    id: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true
    },
    libelle: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    montant: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'fraisforfait',
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
