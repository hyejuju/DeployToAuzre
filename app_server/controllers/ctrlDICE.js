
const winnerlist = function(req, res){
    res.render('dice',{
        winners:
        [
            {year:'2010', game:'Mass Effect 2', team: 'BioWare'},
            {year:'2011', game:'The Elder Scrolls V: skyrim', team: 'Bethesda Game Studios'},
            {year:'2012', game:'Journey', team: 'Thatgamecompany'},
            {year:'2013', game:'The Last of US', team: 'Naughty Dog'},
            {year:'2014', game:'Dragon Age: Inquisition', team: 'BioWare'},
            {year:'2015', game:'Fallout 4', team: 'Bethesda Game Studios'},
            {year:'2016', game:'Overwatch', team: 'Blizzard Entertainment'},
            {year:'2017', game:'The Legend of Zelda:Breath of the wild', team: 'Nintendo EPD'}
        ]});
};
module.exports = {
    winnerlist
};