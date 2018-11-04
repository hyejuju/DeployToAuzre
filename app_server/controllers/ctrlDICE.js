
const winnerlist = function(req, res){
    const path = '/api/dice';//is it??
    const requestOptions = {
        url : apiURL.server + path,
        method : 'GET',
        json : {},
        qs : {}
    };

    request(
        requestOptions,
        function (err, response, body) {
            if (err) {
                res.render('error', {message: err.message});
            }
            else if (response.statusCode !== 200){
                res.render('error', {message: 'Error accessing API: ' + response.statusMessage + " ("+ response.statusCode + ")" });
            }
            else if (!(body instanceof Array)) {
                res.render('error', {message: 'Unexpected response data'});
            }
            else if (!body.length){
                res.render('error', {message: 'No dicuments in collection'});
            }
            else {
                res.render('dice', {winners: body});
            }
        }
    );
    /*res.render('dice',{
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
        ]});*/
};
module.exports = {
    winnerlist
};