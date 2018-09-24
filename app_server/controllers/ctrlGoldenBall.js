
const winnerlist = function(req, res){
    res.render('goldenball',{
        winners:
        [
            {year:'2010', player:'Mass Effect 2', team: 'BioWare'},
            {year:'2011', player:'Portal 2', team: 'Valve Corporation'},
            {year:'2012', player:'Dishonored', team: 'Arkane Studios'},
            {year:'2013', player:'The Last of US', team: 'Naughty Dog'},
            {year:'2014', player:'Destiny', team: 'Bungie'},
            {year:'2015', player:'Fallout 4', team: 'Bethesda Game Studios'},
            {year:'2016', player:'Uncharted 4: A Thiefs End', team: 'Naughty Dog'},
            {year:'2017', player:'What Remains of Edith Finch', team: 'Giant Sparrow'}
        ]});
};

module.exports = {
    winnerlist
};