const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fichefrais', {
    idvisiteur: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'account',
        key: 'id'
      }
    },
    mois: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true
    },
    nbjustificatifs: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    montantvalide: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    datemodif: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    idetat: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      defaultValue: "CR",
      references: {
        model: 'etat',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'fichefrais',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idvisiteur" },
          { name: "mois" },
        ]
      },
      {
        name: "idetat",
        using: "BTREE",
        fields: [
          { name: "idetat" },
        ]
      },
    ]
  });
};
