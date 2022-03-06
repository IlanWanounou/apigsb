const fraisNuitService = require('../services/fraisNuit')
const {getIdVisteur} = require('../services/auth');


exports.findOne = async (req, res) => {
    try {
        let data = await fraisNuitService.findOne(req.params.mois, getIdVisteur(req, res));
        if (data) {
            res.status(200).send(data);
        } else {
            res.status(200).json({message:"La fiche pour le mois demander n'exister pas", quantite: 0});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }

}

exports.update = async (req, res) => {
    try {
        let data = await fraisNuitService.update(req.params.mois, getIdVisteur(req, res), req.body.quantite);
        if (data[0]===1) {
            res.status(201).json({message:"modification effetuer"});
        } else {
            res.status(200).json({message:"Il n'y a aucune fiche correspondant à ce mois"});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

