const express = require("express");
const router = express.Router();
const fraisKmCrl = require('../controllers/fraisKm');


//fraiskm
router.post('/fraiskm/:mois', fraisKmCrl.findOne);



module.exports = router;

