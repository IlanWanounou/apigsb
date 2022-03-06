const fraisRepasService = require('../services/fraisRepas')
const {getIdVisteur} = require('../services/auth');


exports.findOne = async (req, res) => {
    try {
        let data = await fraisRepasService.findOne(req.params.mois, getIdVisteur(req, res));
        if (data) {
            res.status(200).send(data);
        } else {
            res.status(200).json({message:"Il n'y a aucune fiche correspondant à ce mois", quantite: 0});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.update = async (req, res) => {
    try {
        let data = await fraisRepasService.update(req.params.mois, getIdVisteur(req, res), req.body.quantite);
        if (data[0]===1) {
            res.status(201).json({message:"modification effetuer"});
        } else {
            res.status(200).json({message:"Il n'y a aucune fiche correspondant à ce mois"});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
