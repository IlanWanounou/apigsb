const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lignepuissancevehicule', {
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
    idpuissancevehicule: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'puissancevehicule',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'lignepuissancevehicule',
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
        name: "FK_IDPUISSANCEVEHICULE_PUISSANCEVEHICULE",
        using: "BTREE",
        fields: [
          { name: "idpuissancevehicule" },
        ]
      },
    ]
  });
};
