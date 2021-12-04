const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('account', {
    id: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    prenom: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    login: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    mdp: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    adresse: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    cp: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    ville: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    dateembauche: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    code: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    accountType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'account',
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
