const {lignefraisforfait: LigneFraisForfait} = require("../models");


exports.findOne = async(mois, idvisiteur) => {

    const options = {
        where: {
            idvisiteur,
            mois,
            idfraisforfait : 'REP'
        },
        raw: true,
        attributes: ['quantite'],
    }
    return LigneFraisForfait.findOne(options);
}

exports.update = async (mois, idvisiteur, values) => {

    const options = {
        where: {
            idvisiteur,
            mois,
            idfraisforfait : 'REP'
        },
        raw: true,
        attributes: ['quantite'],
    }
    return LigneFraisForfait.update({ quantite: values }, options);

}