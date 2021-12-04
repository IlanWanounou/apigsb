const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lignefraishorsforfait', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idvisiteur: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      references: {
        model: 'fichefrais',
        key: 'idvisiteur'
      }
    },
    mois: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      references: {
        model: 'fichefrais',
        key: 'mois'
      }
    },
    libelle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    montant: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'lignefraishorsforfait',
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
      {
        name: "idvisiteur",
        using: "BTREE",
        fields: [
          { name: "idvisiteur" },
          { name: "mois" },
        ]
      },
    ]
  });
};
