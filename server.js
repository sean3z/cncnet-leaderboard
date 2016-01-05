/* static server for development */
var restify = require('restify'),
    app = restify.createServer();

app.get(/.*/, restify.serveStatic({
    directory: __dirname + '/dist',
    default: 'index.html'
}));

app.listen(8080, function () {
    console.log('WOL Leaderboard listening on %s:%s', app.name, app.url);
});
