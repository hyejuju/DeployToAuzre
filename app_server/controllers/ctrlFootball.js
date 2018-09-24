
const winnerlist = function(req, res){
    res.render('football',{
        winners:
        [
            {year:'2010', player:'Mass Effect 2', team: 'BioWare'},
            {year:'2011', player:'The Elder Scrolls V: skyrim', team: 'Bethesda Game Studios'},
            {year:'2012', player:'Journey', team: 'Thatgamecompany'},
            {year:'2013', player:'The Last of US', team: 'Naughty Dog'},
            {year:'2014', player:'Dragon Age: Inquisition', team: 'BioWare'},
            {year:'2015', player:'Fallout 4', team: 'Bethesda Game Studios'},
            {year:'2016', player:'Overwatch', team: 'Blizzard Entertainment'},
            {year:'2017', player:'The Legend of Zelda:Breath of the wild', team: 'Nintendo EPD'}
        ]});
};
module.exports = {
    winnerlist
};