const express = require('express');
const router = express.Router();

const ctrlApibritish = require('../controllers/ctrlApibritish');
const ctrlApidice = require('../controllers/ctrlApidice');//should it be capital?

//british
router
    .route('/dice')
    .get(ctrlApibritish.winnerlist)
    .post(ctrlApibritish.addWinner);

//dice
router
    .route('/british')
    .get(ctrlApidice.winnerlist)
    .post(ctrlApidice.addWinner);

module.exports = router;
