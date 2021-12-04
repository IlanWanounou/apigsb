var DataTypes = require("sequelize").DataTypes;
var _account = require("./account");
var _etat = require("./etat");
var _fichefrais = require("./fichefrais");
var _fraisforfait = require("./fraisforfait");
var _lignefraisforfait = require("./lignefraisforfait");
var _lignefraishorsforfait = require("./lignefraishorsforfait");
var _lignepuissancevehicule = require("./lignepuissancevehicule");
var _puissancevehicule = require("./puissancevehicule");

function initModels(sequelize) {
  var account = _account(sequelize, DataTypes);
  var etat = _etat(sequelize, DataTypes);
  var fichefrais = _fichefrais(sequelize, DataTypes);
  var fraisforfait = _fraisforfait(sequelize, DataTypes);
  var lignefraisforfait = _lignefraisforfait(sequelize, DataTypes);
  var lignefraishorsforfait = _lignefraishorsforfait(sequelize, DataTypes);
  var lignepuissancevehicule = _lignepuissancevehicule(sequelize, DataTypes);
  var puissancevehicule = _puissancevehicule(sequelize, DataTypes);

  fichefrais.belongsToMany(fichefrais, { as: 'mois_fichefrais', through: lignepuissancevehicule, foreignKey: "idvisiteur", otherKey: "mois" });
  fichefrais.belongsToMany(fichefrais, { as: 'idvisiteur_fichefrais', through: lignepuissancevehicule, foreignKey: "mois", otherKey: "idvisiteur" });
  fichefrais.belongsTo(account, { as: "idvisiteur_account", foreignKey: "idvisiteur"});
  account.hasMany(fichefrais, { as: "fichefrais", foreignKey: "idvisiteur"});
  fichefrais.belongsTo(etat, { as: "idetat_etat", foreignKey: "idetat"});
  etat.hasMany(fichefrais, { as: "fichefrais", foreignKey: "idetat"});
  lignefraisforfait.belongsTo(fichefrais, { as: "idvisiteur_fichefrai", foreignKey: "idvisiteur"});
  fichefrais.hasMany(lignefraisforfait, { as: "lignefraisforfaits", foreignKey: "idvisiteur"});
  lignefraisforfait.belongsTo(fichefrais, { as: "mois_fichefrai", foreignKey: "mois"});
  fichefrais.hasMany(lignefraisforfait, { as: "mois_lignefraisforfaits", foreignKey: "mois"});
  lignefraishorsforfait.belongsTo(fichefrais, { as: "idvisiteur_fichefrai", foreignKey: "idvisiteur"});
  fichefrais.hasMany(lignefraishorsforfait, { as: "lignefraishorsforfaits", foreignKey: "idvisiteur"});
  lignefraishorsforfait.belongsTo(fichefrais, { as: "mois_fichefrai", foreignKey: "mois"});
  fichefrais.hasMany(lignefraishorsforfait, { as: "mois_lignefraishorsforfaits", foreignKey: "mois"});
  lignepuissancevehicule.belongsTo(fichefrais, { as: "idvisiteur_fichefrai", foreignKey: "idvisiteur"});
  fichefrais.hasMany(lignepuissancevehicule, { as: "lignepuissancevehicules", foreignKey: "idvisiteur"});
  lignepuissancevehicule.belongsTo(fichefrais, { as: "mois_fichefrai", foreignKey: "mois"});
  fichefrais.hasMany(lignepuissancevehicule, { as: "mois_lignepuissancevehicules", foreignKey: "mois"});
  lignefraisforfait.belongsTo(fraisforfait, { as: "idfraisforfait_fraisforfait", foreignKey: "idfraisforfait"});
  fraisforfait.hasMany(lignefraisforfait, { as: "lignefraisforfaits", foreignKey: "idfraisforfait"});
  lignepuissancevehicule.belongsTo(puissancevehicule, { as: "idpuissancevehicule_puissancevehicule", foreignKey: "idpuissancevehicule"});
  puissancevehicule.hasMany(lignepuissancevehicule, { as: "lignepuissancevehicules", foreignKey: "idpuissancevehicule"});

  return {
    account,
    etat,
    fichefrais,
    fraisforfait,
    lignefraisforfait,
    lignefraishorsforfait,
    lignepuissancevehicule,
    puissancevehicule,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
