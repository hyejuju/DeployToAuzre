const mongoose = require('mongoose');

const britishModel = mongoose.model('britishmodelname');

const winnerlist = function (req,res) {
        res
            .status(200)
            .json({"year" : "game"});

};

const addWinner = function (req,res) {
    res.status(201).json({"Add winner" : "Work in progress"});
};

module.exports = {
    winnerlist,
    addWinner
};