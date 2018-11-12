const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlDICE = require('../controllers/ctrlDICE'); // ... for the list of World Cup winners (countries)
const ctrlBritish = require('../controllers/ctrlBritish'); // ... for the the list of Golden ball winners (players)

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/dice', ctrlDICE.winnerlist);  // List of DICE awards winners
router.get('/british', ctrlBritish.winnerlist);  // List of British awards winners

router
    .route('/dice/add')
    .get(ctrlDICE.showForm)
    .post(ctrlDICE.addData);

module.exports = router;