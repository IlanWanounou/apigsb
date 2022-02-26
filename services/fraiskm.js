const {lignefraisforfait: LigneFraisForfait} = require("../models");


exports.findOne = async(mois, idvisiteur) => {

    const options = {
        where: {
            idvisiteur,
            mois,
            idfraisforfait : 'KM'
        },
        raw: true,
        attributes: ['quantite'],
    }
    return LigneFraisForfait.findOne(options);
}