const express = require("express");
const router = express.Router();
const fraisKmCrl = require('../controllers/fraisKm');


//fraiskm
router.post('/fraiskm/:mois', fraisKmCrl.findOne);
router.put('/fraiskm/:mois', fraisKmCrl.update);



module.exports = router;

