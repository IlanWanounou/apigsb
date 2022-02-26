const fraisKmService = require('../services/fraiskm')
const {getIdVisteur} = require('../services/auth');


exports.findOne = async (req, res) => {
    console.log(getIdVisteur(req, res))
    try {
        let data = await fraisKmService.findOne(req.params.mois, getIdVisteur(req, res));
        if (data) {
            res.status(200).send(data);
        } else {
            res.status(200).json({message:"La fiche pour le mois demander n'exister pas", quantite: 0});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }

}
