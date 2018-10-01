
const winnerlist = function(req, res){
    res.render('british',{
        winners:
        [
            {year:'2010', game:'Mass Effect 2', team: 'BioWare'},
            {year:'2011', game:'Portal 2', team: 'Valve Corporation'},
            {year:'2012', game:'Dishonored', team: 'Arkane Studios'},
            {year:'2013', game:'The Last of US', team: 'Naughty Dog'},
            {year:'2014', game:'Destiny', team: 'Bungie'},
            {year:'2015', game:'Fallout 4', team: 'Bethesda Game Studios'},
            {year:'2016', game:'Uncharted 4: A Thiefs End', team: 'Naughty Dog'},
            {year:'2017', game:'What Remains of Edith Finch', team: 'Giant Sparrow'}
        ]});
};

module.exports = {
    winnerlist
};