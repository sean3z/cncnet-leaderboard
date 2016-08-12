angular.module('API').factory('API', APISvc);

APISvc.$inject =['$http', '$q'];
function APISvc($http, $q) {
    var factory = this;
    factory.url = '//'+ window.location.hostname + '/api';

    factory.getTop50 = getTop50;
    factory.getPlayer = getPlayer;
    factory.getHoF = getHoF;
    factory.auth = auth;

    return factory;

    //////////

    function getTop50(game) {
        return request({
            url: '/ladder/' + game
        });
    }

    function getPlayer(game, player) {
        return request({
            url: '/ladder/' + game + '/player/' + player
        });
    }

    function getHoF() {
        return request({
            url: '/ladder/hof'
        });
    }

    function auth(username, password) {
        return request({
            url: '/auth/',
            headers: {
                Authorization: 'Basic ' + btoa(username + ':' + password)
            }
        });
    }

    function request(req, options) {
        var deferred = $q.defer();

        req.url = factory.url + req.url;
        req.method = 'GET';

        $http(req)
            .success(function (data) {
                return deferred.resolve(data);
            })
            .error(function (data) {
                deferred.reject(data);
            });

        return deferred.promise;
    }
}
