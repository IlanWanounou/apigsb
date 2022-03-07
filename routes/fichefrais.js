const express = require("express");
const router = express.Router();
const fraisKmCrl = require('../controllers/fraisKm');
const fraisRepas = require('../controllers/fraisRepas');
const fraisNuit = require('../controllers/fraisNuit');
const fraisEtapes = require('../controllers/fraiseEtapes');


//fraiskm
router.post('/fraiskm/:mois', fraisKmCrl.findOne);
router.put('/fraiskm/:mois', fraisKmCrl.update);

// fraisRepas
router.post('/fraisrepas/:mois', fraisRepas.findOne);
router.put('/fraisrepas/:mois', fraisRepas.update);

// fraisNuit
router.post('/fraisnuit/:mois', fraisNuit.findOne);
router.put('/fraisnuit/:mois', fraisNuit.update);

// fraisetapes
//router.post('/fraisetapes/:mois', fraisetapes.findOne);
router.put('/fraisetapes/:mois', fraisEtapes.update);

// fraisHF
//router.post('/fraiskm/:mois', fraisHF.findOne);
//router.put('/fraiskm/:mois', fraisHF.update);



//liste fraisHF






module.exports = router;

