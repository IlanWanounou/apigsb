const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lignefraisforfait', {
    idvisiteur: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'fichefrais',
        key: 'idvisiteur'
      }
    },
    mois: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'fichefrais',
        key: 'mois'
      }
    },
    idfraisforfait: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'fraisforfait',
        key: 'id'
      }
    },
    quantite: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'lignefraisforfait',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idvisiteur" },
          { name: "mois" },
          { name: "idfraisforfait" },
        ]
      },
      {
        name: "idfraisforfait",
        using: "BTREE",
        fields: [
          { name: "idfraisforfait" },
        ]
      },
    ]
  });
};
